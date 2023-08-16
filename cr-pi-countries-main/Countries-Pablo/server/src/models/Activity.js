const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.

module.exports = (sequelize) => {
  // define model
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false,
    },
    duration: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16'),
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: false,
    } 
  },
    { timestamps: false }
  );
};