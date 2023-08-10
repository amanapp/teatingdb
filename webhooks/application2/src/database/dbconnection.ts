import { Sequelize } from "sequelize";

const sequelize = new Sequelize('hr', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});


export default sequelize;