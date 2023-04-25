import express from 'express'
import usersRoutes from './routes/users.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import rolesRoutes from './routes/roles.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(usersRoutes)
app.use(ordersRoutes)
app.use(rolesRoutes)

export default app