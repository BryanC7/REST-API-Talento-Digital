// Importación de dotenv
import { config } from 'dotenv'

// Uso de config
config()

// Exportaciones de variables de entorno 
export const USER_DB = process.env.USER_DB || "postgres"
export const PASSWORD_DB = process.env.PASSWORD_DB || "1234"
export const HOST_DB = process.env.HOST_DB || "localhost"
export const NAME_DB = process.env.NAME_DB || 'digitalizate_db'
export const PORT_DB = process.env.PORT_DB || 4000