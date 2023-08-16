const { Country, Activity } = require('../../db');
const { Op } = require('sequelize');

// Function to get a country by its name
const getCountryByName = async (name) => {
  try {
    // Finding all countries in the database that match the given name
    const filteredCountry = await Country.findAll({
      where: {
        name: {
          // Using the iLike operator to perform a case-insensitive search
          [Op.iLike]: `%${name}%`,
        },
      },
      // Including associated activities in the result
      include: Activity,
    });

    // If any countries are found, return them
    if (filteredCountry.length > 0) {
      return filteredCountry;
    }

    // If no countries are found, throw an error
    throw new Error('Country not found');
  } catch (error) {
    // If any error occurs during the process, throw it
    throw error;
  }
};


module.exports = { getCountryByName };
