import sequelize from '../db.js'
import { users } from "../models/users.js"

export const newUser = async (req, res) => {
    const {nombre, apellido, email, password} = req.body
    try {
        const user = await users.create({
            nombre,
            apellido,
            email,
            password
        })
        res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getTableUser = async (req, res) => {
    try {
        const data = await users.findAll({
            order: [
                ['id_usuario', 'ASC']
            ]
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getClients = async (req, res) => {
    try {
        const clients = await users.findAll({
            where: {
                id_rol: 2
            }
        })
        res.json(clients)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const adminUser = async (req, res) => {
    try {
        const tableUpdate = await users.update (
            {id_rol: 1},
            {where: sequelize.literal('id_usuario % 3 = 0')}
        )
        res.json(tableUpdate)
    } catch (error) {
        return res.status(500).json({message: error.message})      
    }
}

export const updateInfoUser = async (req, res) => {
    const { id, nombre, apellido, email, password } = req.body
    try {
        const userUpdate = await users.findByPk(id)
        userUpdate.nombre = nombre
        userUpdate.apellido = apellido
        userUpdate.email = email
        userUpdate.password = password

        await userUpdate.save()
        res.json(userUpdate)
    } catch (error) {
        return res.status(500).json({message: error.message})      
    }
}

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

export const getUsersCount = async (req, res) => {
    try {
        const amount = await users.count({
            col: 'nombre'
        })
        res.json(amount)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}