const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {  
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
      validate: {
        len: [3],
      },
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregión: {
      type: DataTypes.STRING
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
      area: {
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.FLOAT
    }
   },
   {timestamps: false
  } 
  );
};

