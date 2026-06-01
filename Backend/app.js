import express from 'express'
import connectToDatabase from './Database/mongodb.js'
import errorMiddleware from './middleware/error.middleware.js'
import { PORT } from './config/env.js'
import authRoutes from './Routes/auth.routes.js'
import restaurantRoutes from './Routes/restaurant.routes.js'
import tableRoutes from './Routes/table.routes.js'
import menuRoutes from './Routes/menu.routes.js'
import reservationRoutes from './Routes/reservation.routes.js'
import orderRoutes from './Routes/order.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/auth', authRoutes)
app.use('/api/restaurants', restaurantRoutes)
app.use('/api/tables', tableRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/reservations', reservationRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res)=>{
    res.send("Welcome to the Plateform api");
});
app.use(errorMiddleware)

app.listen(PORT, async()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    await connectToDatabase;
})