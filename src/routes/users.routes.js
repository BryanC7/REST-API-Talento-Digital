// Importación de express
import { Router } from "express"
import { syncTables } from "../index.js"
import { newUser, getTableUser, updateInfoUser, deleteUser, getUsersCounts, getClients, getClientsNameOrder, getClientsLastNameOrder} from '../controllers/user.js'

// Uso de Router
const router = Router()

// Gets
router.get('/users', getTableUser)
router.get('/users/clients', getClients)
router.get('/users/clientsnameorder', getClientsNameOrder)
router.get('/users/clientslastnameorder', getClientsLastNameOrder)
router.get('/users/userscount', getUsersCounts)

// Posts
router.post('/users', newUser)

// Puts
router.put('/users', updateInfoUser)

// Delete
router.delete('/users/:id', deleteUser)

// Exportación de variable router
export default router