const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.

module.exports = (sequelize) => {
  // define model
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    } 
  },
    { timestamps: false }
  );
};