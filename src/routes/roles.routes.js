import { Router } from "express"
import { newRole } from "../controllers/role.js"

const router = Router()

// Agregar nuevo rol
router.post('/roles', newRole)

export default router