// Importación de sequelize
import sequelize from '../db.js'

// Importaciones de modelos
import { roles } from "../models/roles.js"
import { users } from "../models/users.js"

// Crear un nuevo rol
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

// Usuario tipo administrador de prueba
export async function adminTest() {
    try {
        users.create ({
            nombre: 'Admin',
            apellido: 'Prueba',
            email: 'admin.prueba@gmail.com',
            password: '1234',
            imagen: '/img/admin.jpg',
            id_rol: 1
        })
        console.log('Administrador de prueba creado')
    } catch (error) {
        console.error('No se pudo crear el administrador.', error)
    }
}