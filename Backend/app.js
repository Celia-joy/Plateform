import './config/env.js'
import express from 'express'
import connectDB from './Database/mongodb.js'
import errorMiddleware from './middleware/error.middleware.js'
import { PORT } from './config/env.js'

const app = express()

connectDB()


app.use(express.json())

// Routes (uncomment as you build each one)
// import authRoutes from './Routes/auth.routes.js'
// import restaurantRoutes from './Routes/restaurant.routes.js'
// import tableRoutes from './Routes/table.routes.js'
// import menuRoutes from './Routes/menu.routes.js'
// import reservationRoutes from './Routes/reservation.routes.js'
// import orderRoutes from './Routes/order.routes.js'

// app.use('/api/auth', authRoutes)
// app.use('/api/restaurants', restaurantRoutes)
// app.use('/api/tables', tableRoutes)
// app.use('/api/menu', menuRoutes)
// app.use('/api/reservations', reservationRoutes)
// app.use('/api/orders', orderRoutes)


app.use(errorMiddleware)

app.listen(PORT, () => console.log(`PlateForm API running on port ${PORT}`))