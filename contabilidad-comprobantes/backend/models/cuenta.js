const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('cuenta', {
    account: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    revelationName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nature: {
      type:  DataTypes.ENUM('Crédito', 'Débito'),
      allowNull: false,
    },
    unlocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    gmf: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    letAsAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue:true,
    },
    closeBalanced: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    nit: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nifAccount: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    state: {
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        allowNull: false,
      },
  });
};