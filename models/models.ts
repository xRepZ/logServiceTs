const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const LogsModel = sequelize.define('users_model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.STRING},
    action: {type: DataTypes.STRING},
})

module.exports = {
    LogsModel,
}