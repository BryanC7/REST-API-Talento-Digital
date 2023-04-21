import { orders } from "../models/orders.js"

export const newOrder = async (req, res) => {
    const { nro_pedido, id } = req.body
    try {
        const order = await orders.create({
            nro_pedido,
            id_usuario: id
        })
        console.log(order)
        // res.json(order)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getTableOrders = async (req, res) => {
    try {
        const data = await orders.findAll()
        console.log(data)
        // res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getOrdersCount = async (req, res) => {
    try {
        const amount = await orders.count({
            col: 'nombre'
        })
        console.log(amount)
        // res.json(amount)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}