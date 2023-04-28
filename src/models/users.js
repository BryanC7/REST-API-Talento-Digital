// Importación de sequelize
import {Model, DataTypes} from 'sequelize'

// Importaciones de variables y modelos
import sequelize from '../db.js'
import { orders } from './orders.js'
import { roles } from './roles.js'

// Exportación de clase
export class users extends Model {}

users.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    id_rol: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
    }
}, 
{
    sequelize,
    tableName: 'usuarios',
})

// Relaciones uno a muchos usuario-pedido
users.hasMany(orders, {foreignKey:'id_usuario'})
orders.belongsTo(users, {foreignKey:'id_usuario'})

// Relaciones uno a muchos usuario-rol
roles.hasMany(users, {foreignKey:'id_rol'})
users.belongsTo(roles, {foreignKey:'id_rol'})