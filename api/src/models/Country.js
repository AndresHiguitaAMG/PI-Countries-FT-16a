const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {  
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
      validate: {
        len: [3],
      },
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: '---',
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: '---',
    },
    subregión: {
      type: DataTypes.STRING,
      // defaultValue: '---',
    },
    capital: {
              type: DataTypes.STRING,
              allowNull: false,
              defaultValue: '---',
            },
    area: {
      type: DataTypes.FLOAT,
      // defaultValue: 0,
    },
    population: {
      type: DataTypes.FLOAT
    }
   },
   {timestamps: false
  } 
  );
};

