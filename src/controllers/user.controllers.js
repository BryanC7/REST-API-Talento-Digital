import sequelize from '../../db.js'
import { users } from "../../DB/ORM/users.js"

export async function newUser(name, lastName, email, password) {
    try {
        const user = await users.create({
            nombre: name,
            apellido: lastName,
            email,
            password
        })
        console.log('El nuevo usuario ha sido creado con éxito.')
    } catch (error) {
        console.error('Error al crear el nuevo usuario', error)
    }
}

export async function getTableUser() {
    const data = await users.findAll({
        raw: true
    })
   
    return data
}

export async function getClients() {
    const data = await users.findAll({
        where: {
            id_rol: 2
        }
    })
   
    return data
}

export async function adminUser() {
    users.update (
        {id_rol: 1},
        {where: sequelize.literal('id_usuario % 3 = 0')}
    )
}

export async function updateInfoUser(id, name, lastName, email, password) {
    users.update ({
        nombre: name,
        apellido: lastName,
        email,
        password
    },
    {where: sequelize.literal(`id_usuario = ${id}`)}
    )
}

export async function deleteUser(id) {
    users.destroy(
        {where: sequelize.literal(`id_usuario = ${id}`)}
    )
}

export async function getUsersCount() {
    const amount = await users.count({
        col: 'nombre'
    })

    return amount
}

export async function syncTables() {
    try {
      await sequelize.sync()
      console.log('Tablas sincronizadas correctamente.')
    } catch (error) {
      console.error('Error en la sincronización', error)
    }
}