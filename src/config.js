import { config } from 'dotenv'

config()

export const USER_DB = process.env.USER_DB
export const PASSWORD_DB = process.env.PASSWORD_DB
export const HOST_DB = process.env.HOST_DB
export const NAME_DB = process.env.NAME_DB
export const PORT_DB = process.env.PORT_DB