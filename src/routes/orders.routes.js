import { Router } from "express"
import { newOrder, getTableOrders, getOrdersCount, deleteOrder } from "../controllers/order.js"

const router = Router()

// Traer tablas de pedidos y cantidades
router.get('/orders', getTableOrders)
router.get('/orders/countOrders', getOrdersCount)

// Crear nuevo pedido
router.post('/orders', newOrder)

// Eliminar un pedido
router.delete('/orders/:id', deleteOrder)

export default router