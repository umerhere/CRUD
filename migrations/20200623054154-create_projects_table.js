//'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return queryInterface.createTable("project", {
     id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoincrement: true,
       primaryKey: true,
     },
     name: Sequelize.STRING,

     description: {
       type: Sequelize.TEXT,
     },

     createdAt= Sequelize.DATE,
     updatedAt= Sequelize.DATE,

   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable("proejct");
  }
};
