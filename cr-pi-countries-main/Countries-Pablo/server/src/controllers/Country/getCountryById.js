const { Country, Activity } = require('../../db');

// Function to get a country by its ID
const getCountryById = async (id) => {
  try {
    // Finding the country with the given ID in the database
    const country = await Country.findOne({ where: { id }, include: Activity });

    // Returning the country and its associated activities
    // Used the spread operator (...) to copy all properties of the country
    return {
      ...country,
      activities: country.activities.map(({ id, name, difficulty, duration, season }) => ({
        id,
        name,
        difficulty,
        duration,
        season,
      })),
    };
  } catch (error) {
    // Throwing the error if any occurs during the process
    throw error;
  }
};

module.exports = { getCountryById };