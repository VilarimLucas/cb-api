'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parental.init({
    dataNasc: DataTypes.DATE,
    cpf: DataTypes.DOUBLE,
    idPerfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'parental',
  });
  return parental;
};