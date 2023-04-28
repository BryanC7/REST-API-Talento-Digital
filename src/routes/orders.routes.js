// Importación de express
import { Router } from "express"

// Importación de funciones
import { newOrder, getTableOrders, getOrdersUser, getOrdersCount, deleteOrder } from "../controllers/order.js"

// Uso de Router
const router = Router()

// Gets
router.get('/orders', getTableOrders)
router.get('/orders/countOrders', getOrdersCount)
router.get('/orders/:id', getOrdersUser)

// Post
router.post('/orders', newOrder)

// Delete
router.delete('/orders/:id', deleteOrder)

// Exportación de variable router
export default router