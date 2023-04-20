import { newUser, adminUser } from "./controllers/user.js"
import { newOrder } from "./controllers/order.js"
import { newRole } from "./controllers/role.js"
import { syncTables } from "./index.js"

await syncTables()

await newRole('Admin')
await newRole('Client')

await newUser('Pablo', 'Torres', 'pablo.torres@gmail.com', '1234')
await newUser('Gonzalo', 'Guajardo', 'gonzalo.guajardo@gmail.com', '5678')
await newUser('Javier', 'Malbran', 'javier.malbran@gmail.com', '7890')
await newUser('Jose', 'Ortega', 'jose.ortega@gmail.com', '2345')
await newUser('Nicolás', 'Sanhueza', 'nicolas.sanhueza@gmail.com', '0987')
await newUser('Bryan', 'Cabrera', 'bryan.cabrera@gmail.com', '3456')
await newUser('Sebastián', 'Fernández', 'sebastian.fernandez@gmail.com', '6543')
await newUser('Daniel', 'Ferrada', 'daniel.ferrada@gmail.com', '4567')
await newUser('Constanza', 'Gajardo', 'constanza.gajardo@gmail.com', '6789')
await newUser('José', 'Riquelme', 'jose.riquelme@gmail.com', '4321')
await newUser('Nicolás', 'Molina', 'nicolas.molina@gmail.com', '8765')
await newUser('Christopher', 'Díaz', 'christopher.diaz@gmail.com', '5432')

await newOrder(123456, 1)
await newOrder(789012, 2)

await adminUser()