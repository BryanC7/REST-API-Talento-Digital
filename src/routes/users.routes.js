import { Router } from "express"
import { syncTables } from "../index.js"
import { newUser, getTableUser, updateInfoUser, deleteUser, adminUser, getUsersCounts, getClients } from '../controllers/user.js'

const router = Router()

router.get('/sincronizar', (req, res) => {
    try {
        syncTables()
        res.json({message: 'Tablas sincronizadas correctamente'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/users', getTableUser)
router.get('/users/clients', getClients)
router.get('/users/userscount', getUsersCounts)

router.post('/users', newUser)

router.put('/users', updateInfoUser)
router.put('/users/admin', adminUser)

router.delete('/users/:id', deleteUser)

export default router