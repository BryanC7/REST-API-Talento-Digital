// Importación de funciones
import { addRole, adminTest } from "./controllers/role.js"
import { syncTables } from "./index.js"

// Crea las tablas a partir de los modelos
await syncTables()

// // Permite agregar el rol de administrador y cliente
await addRole('Admin')
await addRole('Client')

// Administrador de prueba
await adminTest()