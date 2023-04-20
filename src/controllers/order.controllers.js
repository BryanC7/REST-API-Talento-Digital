import { orders } from "../../DB/ORM/orders.js"

export async function newOrder(num_order, id){
    try {
        const order = await orders.create({
            nro_pedido: num_order,
            id_usuario: id
        })
        console.log('El pedido ha sido creado con éxito.')
    } catch (error) {
        console.error('Error al crear el nuevo pedido', error)
    }
}

export async function getTableOrders() {
    const data = await orders.findAll({
        raw: true
    })
   
    return data
}

export async function getOrdersCount() {
    const amount = await orders.count({
        col: 'nro_pedido'
    })

    return amount
}