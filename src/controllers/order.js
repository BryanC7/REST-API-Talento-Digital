// Importaciones de modelos
import { orders } from "../models/orders.js"
import { users } from "../models/users.js"

// Crear un nuevo pedido
export const newOrder = async (req, res) => {
    const { nro_pedido, id_usuario } = req.body
    try {
        const order = await orders.create({
            nro_pedido,
            id_usuario
        })
        res.json(order)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Obtener la tabla de los pedidos
export const getTableOrders = async (req, res) => {
    try {
        const data = await orders.findAll({
            include: {
                model: users,
                required: true,
                attributes:['nombre', 'apellido']
            }
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Obtener la tabla de los pedidos de un usuario específico
export const getOrdersUser = async (req, res) => {
    const { id } = req.params
    try {
        const data = await orders.findAll({
            where: {
                id_usuario: id
            }
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Obtener la cantidad de pedidos
export const getOrdersCount = async (req, res) => {
    try {
        const amount = await orders.count({
            col: 'nro_pedido'
        })
        res.json(amount)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Eliminar un pedido
export const deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        await orders.destroy({
            where: {
                id_pedido: id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}