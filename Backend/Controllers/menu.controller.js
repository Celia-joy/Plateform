import MenuItem from '../Models/menuItem.model.js'

export const addMenuItem = async (req, res, next) => {
  const { name, description, price, category } = req.body

  try {
    if (!name || !price || !category) {
      const error = new Error('Name, price and category are required')
      error.statusCode = 400
      throw error
    }

    const menuItem = await MenuItem.create({
      restaurant: req.user.restaurant,
      name,
      description,
      price,
      category
    })

    res.status(201).json({
      success: true,
      message: 'Menu item added successfully',
      data: { menuItem }
    })
  } catch (error) {
    next(error)
  }
}

export const getMenuByRestaurant = async (req, res, next) => {
  try {
    const menuItems = await MenuItem.find({
      restaurant: req.params.restaurantId,
      isAvailable: true
    })

    res.status(200).json({
      success: true,
      data: { menuItems }
    })
  } catch (error) {
    next(error)
  }
}

export const updateMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findOneAndUpdate(
      { _id: req.params.id, restaurant: req.user.restaurant },
      req.body,
      { new: true, runValidators: true }
    )

    if (!menuItem) {
      const error = new Error('Menu item not found or does not belong to your restaurant')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: 'Menu item updated successfully',
      data: { menuItem }
    })
  } catch (error) {
    next(error)
  }
}

export const deleteMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findOneAndDelete({
      _id: req.params.id,
      restaurant: req.user.restaurant
    })

    if (!menuItem) {
      const error = new Error('Menu item not found or does not belong to your restaurant')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: 'Menu item deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}