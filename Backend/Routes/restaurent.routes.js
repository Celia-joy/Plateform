import { Router } from 'express'
import {
  createRestaurant,
  getAllRestaurants,
  getRestaurantBySlug,
  updateRestaurant
} from '../Controllers/restaurant.controller.js'
import { authorize, requireRole } from '../middleware/auth.middleware.js'

const restaurantRouter = Router()

// Public
restaurantRouter.get('/:slug', getRestaurantBySlug)

// Super admin only
restaurantRouter.post('/', authorize, requireRole('super_admin'), createRestaurant)
restaurantRouter.get('/', authorize, requireRole('super_admin'), getAllRestaurants)
restaurantRouter.put('/:id', authorize, requireRole('super_admin'), updateRestaurant)

export default restaurantRouter