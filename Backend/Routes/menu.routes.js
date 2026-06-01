import { Router } from 'express'
import {
  addMenuItem,
  getMenuByRestaurant,
  updateMenuItem,
  deleteMenuItem
} from '../Controllers/menu.controller.js'
import { authorize, requireRole } from '../middleware/auth.middleware.js'

const menuRouter = Router()

// Public — anyone can view a restaurant's menu
menuRouter.get('/:restaurantId', getMenuByRestaurant)

// Client admin only
menuRouter.post('/', authorize, requireRole('client_admin'), addMenuItem)
menuRouter.put('/:id', authorize, requireRole('client_admin'), updateMenuItem)
menuRouter.delete('/:id', authorize, requireRole('client_admin'), deleteMenuItem)

export default menuRouter