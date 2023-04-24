import { config } from 'dotenv'

config()

export const DB_USER = process.env.USER_DB || "postgres"
export const DB_PASSWORD = process.env.PASSWORD_DB || "1234"
export const DB_HOST = process.env.HOST_DB || "localhost"
export const DB_DATABASE = process.env.NAME_DB || 'digitalizate_db'
export const DB_PORT = process.env.PORT_DB || 5432