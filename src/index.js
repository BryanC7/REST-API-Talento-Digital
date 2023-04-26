import app from "./app.js"
import sequelize from './db.js'
import { DB_PORT } from "./config.js"
import { orders } from "./models/orders.js"
import { roles } from "./models/roles.js"
import { users } from "./models/users.js"

async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log('Conexión establecida')
        app.listen(DB_PORT)
        console.log(`Servidor funcionando en el puerto ${DB_PORT}`)
    } catch (error) {
        console.log('Error a conectar la base de datos', error)
    }
}

export async function syncTables() {
    try {
        await sequelize.sync()
        console.log('Tablas sincronizadas correctamente')
    } catch(error) {
        console.log('Error al crear tablas', error)
    }
}

connectDB()