const Sequelize = require('sequelize');
const  db  = require('../database/connection');

module.exports = db.define("tasks", {


    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    project_id: Sequelize.INTEGER,
    priority: Sequelize.STRING,
    status: Sequelize.STRING,
    due_date: Sequelize.DATE,

    description: {
        type: Sequelize.TEXT,
    },
    display_order:  Sequelize.INTEGER
}); //accessible as we made it global in connection.js
