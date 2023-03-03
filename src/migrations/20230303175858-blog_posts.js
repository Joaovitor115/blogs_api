'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const blogPost = await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      published: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updated: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },

    });
    return blogPost;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');

  }
};
