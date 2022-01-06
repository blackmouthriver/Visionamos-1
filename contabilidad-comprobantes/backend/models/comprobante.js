const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comprobante', {
    name: {
      type: DataTypes.STRING(29),
      allowNull: false
    },
    vaucher: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('Activo', 'Inactivo'),
      allowNull: false,
    },
    restartSequence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    automatic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue:true,
    },
    
  });
};

