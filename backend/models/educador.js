'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class educador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  educador.init({
    especializacao: DataTypes.STRING,
    idPerfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'educador',
  });
  return educador;
};