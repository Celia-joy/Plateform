import { Router } from 'express'
import {
  addTable,
  getTables,
  updateTable,
  deleteTable
} from '../Controllers/table.controller.js'
import { authorize, requireRole } from '../middleware/auth.middleware.js'

const tableRouter = Router()

// All table routes — client_admin only
tableRouter.post('/', authorize, requireRole('client_admin'), addTable)
tableRouter.get('/', authorize, requireRole('client_admin'), getTables)
tableRouter.put('/:id', authorize, requireRole('client_admin'), updateTable)
tableRouter.delete('/:id', authorize, requireRole('client_admin'), deleteTable)

export default tableRouter