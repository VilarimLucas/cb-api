'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avaliacaoGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  avaliacaoGame.init({
    notaAvaliacao: DataTypes.FLOAT,
    idPerfilInfantil: DataTypes.INTEGER,
    idGame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'avaliacaoGame',
  });
  return avaliacaoGame;
};