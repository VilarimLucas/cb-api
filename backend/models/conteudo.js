'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class conteudo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  conteudo.init({
    titulo: DataTypes.STRING,
    texto: DataTypes.STRING,
    referencia: DataTypes.STRING,
    sugestaoDeJogos: DataTypes.STRING,
    idEducador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'conteudo',
  });
  return conteudo;
};