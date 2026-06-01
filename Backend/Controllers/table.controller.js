import Table from '../Models/table.model.js'

export const addTable = async (req, res, next) => {
  const { tableNumber, capacity } = req.body

  try {
    if (!tableNumber || !capacity) {
      const error = new Error('Table number and capacity are required')
      error.statusCode = 400
      throw error
    }

    const table = await Table.create({
      restaurant: req.user.restaurant,  // from their JWT
      tableNumber,
      capacity
    })

    res.status(201).json({
      success: true,
      message: 'Table added successfully',
      data: { table }
    })
  } catch (error) {
    next(error)
  }
}

export const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find({ restaurant: req.user.restaurant })

    res.status(200).json({
      success: true,
      data: { tables }
    })
  } catch (error) {
    next(error)
  }
}

export const updateTable = async (req, res, next) => {
  try {
    const table = await Table.findOneAndUpdate(
      { _id: req.params.id, restaurant: req.user.restaurant },
      req.body,
      { new: true, runValidators: true }
    )

    if (!table) {
      const error = new Error('Table not found or does not belong to your restaurant')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: 'Table updated successfully',
      data: { table }
    })
  } catch (error) {
    next(error)
  }
}

export const deleteTable = async (req, res, next) => {
  try {
    const table = await Table.findOneAndDelete({
      _id: req.params.id,
      restaurant: req.user.restaurant
    })

    if (!table) {
      const error = new Error('Table not found or does not belong to your restaurant')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: 'Table deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}