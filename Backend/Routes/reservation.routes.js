import { Router } from 'express'
import {
  createReservation,
  getReservations,
  getReservationById,
  updateReservationStatus,
  cancelReservation
} from '../Controllers/reservation.controller.js'
import { authorize, requireRole } from '../middleware/auth.middleware.js'

const reservationRouter = Router()

reservationRouter.post('/', authorize, requireRole('customer'), createReservation)
reservationRouter.delete('/:id', authorize, requireRole('customer'), cancelReservation)


reservationRouter.get('/', authorize, getReservations)
reservationRouter.get('/:id', authorize, getReservationById)


reservationRouter.put(
  '/:id/status',
  authorize,
  requireRole('staff', 'client_admin'),
  updateReservationStatus
)

export default reservationRouter