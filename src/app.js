import express from 'express'
import usersRoutes from './routes/users.routes.js'
import ordersRoutes from './routes/orders.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(usersRoutes)
app.use(ordersRoutes)

export default app