import router from "./users.routes.js"
import { newOrder, getTableOrders, getOrdersCount } from "../controllers/order.js"


router.get('/orders', getTableOrders)
router.get('/orders/countOrders', getOrdersCount)

router.post('/orders', newOrder)