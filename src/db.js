// Importación de variables
import { Sequelize } from 'sequelize'
import { NAME_DB, USER_DB, PASSWORD_DB, HOST_DB } from './config.js'

// Instancia de sequelize para conectar a la DB ya creada
export const sequelize = new Sequelize (
    NAME_DB,
    USER_DB,
    PASSWORD_DB,
    { 
        host: HOST_DB, 
        dialect:'postgres',
        define: {
            timestamps: false
        }
    }
)

// Exportación de la variable sequelize
export default sequelize