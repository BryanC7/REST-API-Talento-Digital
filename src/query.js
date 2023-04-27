import { addRole, adminRole } from "./controllers/role.js"
import { syncTables } from "./index.js"

// await syncTables()

// await addRole('Admin')
// await addRole('Client')

await adminRole()