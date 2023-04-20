import { Router } from "express"
import { newUser, getTableUser, updateInfoUser, deleteUser, getClients, getUsersCount, adminUser } from '../controllers/user.js'

const router = Router()

router.get('/users', getTableUser)
router.get('/users/clients', getClients)
router.get('/users/countUsers', getUsersCount)

router.post('/users', newUser)

router.put('/users/:id', updateInfoUser)
router.put('/users/admin', adminUser)

router.delete('/users/:id', deleteUser)

export default router