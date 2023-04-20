import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000 
export const USER_DB = process.env.DB_USER || 'postgres'
export const PASSWORD_DB = process.env.DB_PASSWORD || '1234'
export const HOST_DB = process.env.DB_HOST || 'localhost'
export const NAME_DB = process.env.DB_DATABASE || 'digitalizate_db'
export const PORT_DB = process.env.DB_PORT || 5432