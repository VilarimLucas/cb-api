'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagem: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      roteGame: {
        type: Sequelize.STRING
      },
      idPerfilGamer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'gamers', key: 'id' },
        onDelete: 'CASCADE'
      },
      idConteudo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'conteudos', key: 'id' },
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
    await queryInterface.dropTable('games');
  }
};