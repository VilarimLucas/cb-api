'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('conteudos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      texto: {
        type: Sequelize.STRING
      },
      referencia: {
        type: Sequelize.STRING
      },
      sugestaoDeJogos: {
        type: Sequelize.STRING
      },
      idEducador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'educadors', key: 'id' },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('conteudos');
  }
};