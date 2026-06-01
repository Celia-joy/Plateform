import Restaurant from '../Models/restaurant.model.js'

export const createRestaurant = async (req, res, next) => {
  const { name, slug, address, phone } = req.body

  try {
    if (!name || !slug || !address || !phone) {
      const error = new Error('All fields are required')
      error.statusCode = 400
      throw error
    }

    const existingRestaurant = await Restaurant.findOne({ slug })
    if (existingRestaurant) {
      const error = new Error('A restaurant with this slug already exists')
      error.statusCode = 409
      throw error
    }

    const restaurant = await Restaurant.create({
      name,
      slug,
      address,
      phone,
      owner: req.user._id  // the logged-in super_admin
    })

    res.status(201).json({
      success: true,
      message: 'Restaurant created successfully',
      data: { restaurant }
    })
  } catch (error) {
    next(error)
  }
}

export const getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().populate('owner', 'name email')

    res.status(200).json({
      success: true,
      data: { restaurants }
    })
  } catch (error) {
    next(error)
  }
}

export const getRestaurantBySlug = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ slug: req.params.slug })

    if (!restaurant) {
      const error = new Error('Restaurant not found')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      data: { restaurant }
    })
  } catch (error) {
    next(error)
  }
}

export const updateRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!restaurant) {
      const error = new Error('Restaurant not found')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      success: true,
      message: 'Restaurant updated successfully',
      data: { restaurant }
    })
  } catch (error) {
    next(error)
  }
}