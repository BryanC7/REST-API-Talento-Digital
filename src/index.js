// Importación de variables
import app from "./app.js"
import sequelize from './db.js'
import { PORT_DB } from "./config.js"
import { orders } from "./models/orders.js"
import { roles } from "./models/roles.js"
import { users } from "./models/users.js"

/**
 * Conecta con la base de datos en el puerto definido por las variables de entorno
 */
async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log('Conexión establecida')
        app.listen(PORT_DB, () => {
            console.log('Servidor conectado en el puerto', PORT_DB)
        })
    } catch (error) {
        console.log('Error a conectar la base de datos', error)
    }
}


/**
 * Crea la base de datos con el nombre proporcionado en variable sequelize
 */
export async function createDatabase() {
    try {
        await sequelize.query('CREATE DATABASE digitalizate_db')
        console.log('Base datos creada correctamente')
    } catch (error) {
        console.log('Error al crear la base de datos', error)
    }
}

/**
 * Sincroniza las tablas mediante el uso de los modelos
 */
export async function syncTables() {
    try {
        await sequelize.sync({force: true})
        console.log('Tablas sincronizadas correctamente')
    } catch(error) {
        console.log('Error al crear tablas', error)
    }
}

// Llamada a la función para conectar con la DB
connectDB()