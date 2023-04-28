// Importación de sequelize
import {Model, DataTypes} from 'sequelize'

// Importación de variable sequelize
import sequelize from '../db.js'

// Exportación de clase
export class roles extends Model {}

roles.init({
    id_rol:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING(10),
        allowNull: false,
    } 
}, 
{
    sequelize,
    tableName: 'roles',
})