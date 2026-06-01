import { Router } from 'express'
import {
  createOrder,
  getOrdersByReservation,
  updateOrderStatus
} from '../Controllers/order.controller.js'
import { authorize, requireRole } from '../middleware/auth.middleware.js'

const orderRouter = Router()


orderRouter.post('/', authorize, requireRole('customer', 'staff'), createOrder)


orderRouter.get(
  '/:reservationId',
  authorize,
  requireRole('staff', 'client_admin'),
  getOrdersByReservation
)

orderRouter.put(
  '/:id/status',
  authorize,
  requireRole('staff'),
  updateOrderStatus
)

export default orderRouter