/* const Sequelize = require('sequelize');
const  db  = require('../database/connection');

module.exports = db.define("users", {


    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    role_id: Sequelize.INTEGER,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone: Sequelize.STRING,
    image: Sequelize.TEXT
}); //accessible as we made it global in connection.js
 */