import Sequelize from 'sequelize'; 

const sequelize = new Sequelize('express-api', 'postgres', 'aceballos', {
    host: 'localhost',
    dialect: 'postgres',
}); 


export default sequelize 
