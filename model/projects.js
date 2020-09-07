/* const Sequelize = require('sequelize');
const  db  = require('../database/connection');

module.exports = db.define("projects", {


    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Sequelize.STRING,

    description: {
        type: Sequelize.TEXT,
    },
    display_order:  Sequelize.INTEGER
}); //accessible as we made it global in connection.js
 */