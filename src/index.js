import app from "./app.js"
import sequelize from './db.js'
import { orders } from "./models/orders.js"
import { roles } from "./models/roles.js"
import { users } from "./models/users.js"

async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log('Conexión establecida')
        app.listen(4000)
        console.log('Servidor funcionando en el puerto 4000')
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