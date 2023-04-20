import express from 'express'
import usersRoutes from './routes/users.routes.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(usersRoutes)

export default app