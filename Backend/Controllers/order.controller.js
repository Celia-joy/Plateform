import Order from '../Models/order.model.js'
import Reservation from '../Models/reservation.model.js'
import MenuItem from '../Models/menuItem.model.js'

export const createOrder = async (req, res, next) => {
  const { reservationId, items } = req.body

  try {
    if (!reservationId || !items || items.length === 0) {
      const error = new Error('Reservation ID and at least one item are required')
      error.statusCode = 400
      throw error
    }

    // Make sure the reservation exists and is active
    const reservation = await Reservation.findById(reservationId)
    if (!reservation) {
      const error = new Error('Reservation not found')
      error.statusCode = 404
      throw error
    }

    if (!['confirmed', 'seated'].includes(reservation.status)) {
      const error = new Error('Orders can only be placed for confirmed or seated reservations')
      error.statusCode = 400
      throw error
    }

    // Calculate total amount from menu item prices
    let totalAmount = 0
    const orderItems = []

    for (const item of items) {
      const menuItem = await MenuItem.findById(item.menuItemId)

      if (!menuItem) {
        const error = new Error(`Menu item ${item.menuItemId} not found`)
        error.statusCode = 404
        throw error
      }

      if (!menuItem.isAvailable) {
        const error = new Error(`${menuItem.name} is currently not available`)
        error.statusCode = 400
        throw error
      }

      totalAmount += menuItem.price * item.quantity
      orderItems.push({
        menuItem: menuItem._id,
        quantity: item.quantity,
        notes: item.notes || ''
      })
    }

    const order = await Order.create({
      reservation: reservationId,
      items: orderItems,
      totalAmount,
      status: 'pending'
    })

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: { order }
    })
  } catch (error) {
    next(error)
  }
}

export const getOrdersByReservation = async (req, res, next) => {
  try {
    const orders = await Order.find({ reservation: req.params.reservationId })
      .populate('items.menuItem', 'name price category')

    res.status(200).json({
      success: true,
      data: { orders }
    })
  } catch (error) {
    next(error)
  }
}

export const updateOrderStatus = async (req, res, next) => {
  const { status } = req.body

  try {
    const allowedStatuses = ['preparing', 'served', 'paid']

    if (!allowedStatuses.includes(status)) {
      const error = new Error(
        `Invalid status — allowed: ${allowedStatuses.join(', ')}`
      )
      error.statusCode = 400
      throw error
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!order) {
      const error = new Error('Order not found')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: `Order status updated to ${status}`,
      data: { order }
    })
  } catch (error) {
    next(error)
  }
}