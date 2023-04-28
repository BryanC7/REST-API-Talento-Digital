// Importación de sequelize
import sequelize from '../db.js'

// Importación de modelo de usuario
import { users } from "../models/users.js"

// Crear nuevo usuario
export const newUser = async (req, res) => {
    const {nombre, apellido, email, password, imagen} = req.body
    try {
        const user = await users.create({
            nombre,
            apellido,
            email,
            password,
            imagen
        })
        res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Traer la tabla de usuarios
export const getTableUser = async (req, res) => {
    try {
        const data = await users.findAll()
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Traer la tabla de clientes
export const getClients = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {id_rol: 2},
            order: [
                ['id_usuario', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getClientsNameOrder = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {id_rol: 2},
            order: [
                ['nombre', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getClientsLastNameOrder = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {id_rol: 2},
            order: [
                ['apellido', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getClientsNameOrder = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {id_rol: 2},
            order: [
                ['nombre', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getClientsLastNameOrder = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {id_rol: 2},
            order: [
                ['apellido', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Traer la cantidad de administradores y clientes
export const getUsersCounts = async (req, res) => {
    try {
        const amount = await users.findAll({
            attributes: ['id_rol', [sequelize.fn('count', sequelize.col('id_rol')), 'cantidad']],
            group: ['id_rol']
        })
        res.json(amount)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Actualizar información del usuario
export const updateInfoUser = async (req, res) => {
    const { id, nombre, apellido, email, password, imagen } = req.body
    try {
        const userUpdate = await users.findByPk(id)
        userUpdate.nombre = nombre
        userUpdate.apellido = apellido
        userUpdate.email = email
        userUpdate.password = password
        userUpdate.imagen = imagen

        await userUpdate.save()
        res.json(userUpdate)
    } catch (error) {
        return res.status(500).json({message: error.message})      
    }
}

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await users.destroy({
            where: {
                id_usuario: id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})      
    }
}