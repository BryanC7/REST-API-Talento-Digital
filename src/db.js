import {Sequelize} from 'sequelize'
import { DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } from './config.js'

export const sequelize = new Sequelize (
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    { 
        host: DB_HOST, 
        DB_PORT, // Esta linea se comenta para utilizar la api en localhost
        dialect:'postgres',
        define: {
            timestamps: false
        }
    }
)
    
export default sequelize