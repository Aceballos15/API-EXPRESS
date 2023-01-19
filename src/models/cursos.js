import { DataTypes } from 'Sequelize'
import sequelize from '../database/database.js'
import student from './students.js'; 

const curso= sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING,
    }, 
    description: {
        type: DataTypes.STRING,
    },
    encargado: {
        type: DataTypes.STRING,
    }
}); 

curso.hasMany(student, {
    foreignKey: 'curso_id', 
    sourceKey: 'id', 
    onDelete: 'CASCADE'
})

student.belongsTo(curso, {
    foreignKey: 'curso_id', 
    tarjetId: 'id'
}) 

export default curso
