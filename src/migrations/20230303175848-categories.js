'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const categories = await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return categories
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');

  }
};
