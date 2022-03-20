const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
    },
    dificulty: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    duration: {
      type: DataTypes.STRING
    },
    season: {
      type: DataTypes.ENUM("summer", "autumn", "winter", "spring")
    }
  });
};
