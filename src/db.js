import {Sequelize} from 'sequelize'
import { NAME_DB, USER_DB, PASSWORD_DB, HOST_DB, PORT_DB } from './config.js'

export const sequelize = new Sequelize (
    NAME_DB,
    USER_DB,
    PASSWORD_DB,
    { 
        host: HOST_DB, 
        port: PORT_DB, // Esta linea se comenta para utilizar la api en localhost
        dialect:'postgres',
        define: {
            timestamps: false
        }
    }
)
    
export default sequelize