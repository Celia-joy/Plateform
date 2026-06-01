import Reservation from '../Models/reservation.model.js'
import Table from '../Models/table.model.js'
import sendReservationConfirmationEmail from '../utils/reservationConfirmation.js'

export const createReservation = async (req, res, next) => {
  const { restaurantId, tableId, date, timeSlot, partySize, specialRequests } = req.body

  try {
    if (!restaurantId || !tableId || !date || !timeSlot || !partySize) {
      const error = new Error('All fields are required')
      error.statusCode = 400
      throw error
    }

    // Check the table exists and belongs to that restaurant
    const table = await Table.findOne({
      _id: tableId,
      restaurant: restaurantId,
      isAvailable: true
    })

    if (!table) {
      const error = new Error('Table not found or not available')
      error.statusCode = 404
      throw error
    }

    // Check party size doesn't exceed table capacity
    if (partySize > table.capacity) {
      const error = new Error(
        `This table only fits ${table.capacity} guests — your party is ${partySize}`
      )
      error.statusCode = 400
      throw error
    }

    // ⭐ COLLISION GUARD — the heart of PlateForm
    // Normalize date to midnight so time doesn't interfere with the comparison
    const reservationDate = new Date(date)
    reservationDate.setHours(0, 0, 0, 0)
    const nextDay = new Date(reservationDate)
    nextDay.setDate(nextDay.getDate() + 1)

    const existingReservation = await Reservation.findOne({
      table: tableId,
      date: { $gte: reservationDate, $lt: nextDay },
      timeSlot,
      status: { $nin: ['cancelled'] }
    })

    if (existingReservation) {
      const error = new Error(
        'This table is already booked for that date and time — please choose another slot'
      )
      error.statusCode = 409
      throw error
    }

    // All checks passed — create the reservation
    const reservation = await Reservation.create({
      customer: req.user._id,
      restaurant: restaurantId,
      table: tableId,
      date: reservationDate,
      timeSlot,
      partySize,
      specialRequests: specialRequests || '',
      status: 'pending'
    })

    // Send confirmation email
    await sendReservationConfirmationEmail(
      req.user.email,
      req.user.name,
      { date, timeSlot, partySize, tableNumber: table.tableNumber }
    )

    res.status(201).json({
      success: true,
      message: 'Reservation created successfully',
      data: { reservation }
    })
  } catch (error) {
    next(error)
  }
}

export const getReservations = async (req, res, next) => {
  try {
    let filter = {}

    // Each role sees only what they should
    if (req.user.role === 'customer') {
      // Customers see only their own reservations
      filter = { customer: req.user._id }

    } else if (req.user.role === 'staff' || req.user.role === 'client_admin') {
      // Staff and client_admin see their restaurant's reservations
      filter = { restaurant: req.user.restaurant }
    }
    // super_admin sees everything — filter stays empty {}

    const reservations = await Reservation.find(filter)
      .populate('customer', 'name email')
      .populate('table', 'tableNumber capacity')
      .populate('restaurant', 'name')
      .sort({ date: 1 })

    res.status(200).json({
      success: true,
      data: { reservations }
    })
  } catch (error) {
    next(error)
  }
}

export const getReservationById = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate('customer', 'name email')
      .populate('table', 'tableNumber capacity')
      .populate('restaurant', 'name address')

    if (!reservation) {
      const error = new Error('Reservation not found')
      error.statusCode = 404
      throw error
    }

    // Customers can only view their own reservation
    if (
      req.user.role === 'customer' &&
      reservation.customer._id.toString() !== req.user._id.toString()
    ) {
      const error = new Error('Access denied')
      error.statusCode = 403
      throw error
    }

    res.status(200).json({
      success: true,
      data: { reservation }
    })
  } catch (error) {
    next(error)
  }
}

export const updateReservationStatus = async (req, res, next) => {
  const { status } = req.body

  try {
    const allowedStatuses = ['confirmed', 'seated', 'completed', 'cancelled']

    if (!allowedStatuses.includes(status)) {
      const error = new Error(
        `Invalid status — allowed: ${allowedStatuses.join(', ')}`
      )
      error.statusCode = 400
      throw error
    }

    const reservation = await Reservation.findOneAndUpdate(
      { _id: req.params.id, restaurant: req.user.restaurant },
      { status },
      { new: true }
    )

    if (!reservation) {
      const error = new Error('Reservation not found or does not belong to your restaurant')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: `Reservation status updated to ${status}`,
      data: { reservation }
    })
  } catch (error) {
    next(error)
  }
}

export const cancelReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findOne({
      _id: req.params.id,
      customer: req.user._id
    })

    if (!reservation) {
      const error = new Error('Reservation not found or does not belong to you')
      error.statusCode = 404
      throw error
    }

    if (['completed', 'seated'].includes(reservation.status)) {
      const error = new Error('Cannot cancel a reservation that is already seated or completed')
      error.statusCode = 400
      throw error
    }

    reservation.status = 'cancelled'
    await reservation.save()

    res.status(200).json({
      success: true,
      message: 'Reservation cancelled successfully',
      data: { reservation }
    })
  } catch (error) {
    next(error)
  }
}