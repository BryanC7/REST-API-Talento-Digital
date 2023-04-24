import {Sequelize} from 'sequelize'
import { DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD } from './config.js'

export const sequelize = new Sequelize (
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    { 
        host: DB_HOST, 
        dialect:'postgres',
        define: {
            timestamps: false
        }
    }
)
    
export default sequelize