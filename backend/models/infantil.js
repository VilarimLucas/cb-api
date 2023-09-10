'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class infantil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  infantil.init({
    idPerfil: DataTypes.INTEGER,
    idPerfilParental: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'infantil',
  });
  return infantil;
};