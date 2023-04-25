import { config } from 'dotenv'

config()

export const DB_USER = process.env.USER_DB
export const DB_PASSWORD = process.env.PASSWORD_DB
export const DB_HOST = process.env.HOST_DB
export const DB_DATABASE = process.env.NAME_DB
export const DB_PORT = process.env.PORT_DB