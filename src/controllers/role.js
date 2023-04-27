import sequelize from '../db.js'
import { roles } from "../models/roles.js"
import { users } from "../models/users.js"

export const newRole = async (req, res) => {
    const { tipo } = req.body
    try {
        const rol = await roles.create({
            tipo
        })
        res.json(rol)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function addRole(tipo){
    try {
        const rol = await roles.create({
            tipo
        })
        console.log('Nuevo rol creado')
    } catch (error) {
        console.error('No se pudo crear el nuevo rol.', error) 
    }
}

export async function adminRole(){
    try {
        await users.update (
            {id_rol: 1},
            {where: sequelize.literal('id_usuario % 3 = 0')}
        )
        console.log('Actualizando usuarios con rol admin')
    } catch (error) {
        console.error('No se pudo actualizar el rol.', error) 
    }
}