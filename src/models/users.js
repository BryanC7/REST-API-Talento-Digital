import {Model, DataTypes} from 'sequelize'
import sequelize from '../db.js'
import { orders } from './orders.js'
import { roles } from './roles.js'

export class users extends Model {}

users.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(40),
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING(15),
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

users.hasMany(orders, {foreignKey:'id_usuario'})
orders.belongsTo(users, {foreignKey:'id_usuario'})

roles.hasMany(users, {foreignKey:'id_rol'})
users.belongsTo(roles, {foreignKey:'id_rol'})