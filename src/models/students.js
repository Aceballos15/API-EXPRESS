import { DataTypes } from 'Sequelize'
import sequelize from '../database/database.js'

const student= sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING,
    }, 
    document: {
        type: DataTypes.INTEGER,
    }, 
    date: {
        type: DataTypes.INTEGER,
    }, 
    email: {
        type: DataTypes.STRING,
    }
})

export default student