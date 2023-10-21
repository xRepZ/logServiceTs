import { sequelize } from '../db'
import { DataTypes } from 'sequelize'

export const LogsModel = sequelize.define('users_model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER},
    action: {type: DataTypes.ENUM('CREATED', 'UPDATED')},
})
