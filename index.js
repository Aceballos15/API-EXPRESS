
import { Sequelize } from 'sequelize';
import app from './app.js'
import sequelize from './src/database/database.js';



const main = async ()=>{
    app.listen(process.env.PORT || 4000, (req, res) => {
        console.log(`Server is running on port ${process.env.PORT || 4000}`) 
    }); 
}

main();

