import express from 'express'
import usersRoutes  from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',usersRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'No se encontró el endpoint'
    })
})

export default app