'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init({
    imagem: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    roteGame: DataTypes.STRING,
    idPerfilGamer: DataTypes.INTEGER,
    idConteudo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};