// Importación de express
import express from 'express'

// Importaciones de variables
import usersRoutes from './routes/users.routes.js'
import ordersRoutes from './routes/orders.routes.js'

// Uso de express
const app = express()

// Middlewares
app.use(express.json())
app.use(usersRoutes)
app.use(ordersRoutes)

// Exportación de la variable app
export default app