import { Router } from "express"
import { syncTables } from "../index.js"
import { newUser, getTableUser, updateInfoUser, deleteUser, adminUser, getUsersCounts, getClients, getClientsNameOrder, getClientsLastNameOrder} from '../controllers/user.js'

const router = Router()

router.get('/users', getTableUser)
router.get('/users/clients', getClients)
router.get('/users/clientsnameorder', getClientsNameOrder)
router.get('/users/clientslastnameorder', getClientsLastNameOrder)
router.get('/users/userscount', getUsersCounts)

router.post('/users', newUser)

router.put('/users', updateInfoUser)
router.put('/users/admin', adminUser)

router.delete('/users/:id', deleteUser)

export default router