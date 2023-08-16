const axios = require('axios');
const { Country, Activity } = require('../../db');

// Function to get all countries
const getCountries = async () => {
  const URL = 'http://localhost:5000/countries'; // URL to fetch countries data
  try {
    // Making a GET request to the URL
    const { data } = await axios(URL);
    // Iterating over each country in the data
    await Promise.all(data.map(async (country) => {
      // Destructuring required properties from each country
      const {
        cca3: id,
        name: { common: name },
        flags: { png: flags },
        capital = ['Not Found'],
        continents = ['Not Found'],
        population,
        subregion = 'Not Found',
        area = 'Not Found',
      } = country;

      // Finding or creating a country in the database with the destructured properties
      await Country.findOrCreate({
        where: { id },
        defaults: {
          name,
          flags,
          capital: capital[0],
          continents: continents[0],
          population,
          subregion,
          area: area.toString(),
        },
      });
    }));

    // Returning all countries including their associated activities
    return Country.findAll({ include: Activity });
  } catch (error) {
    // Returning the error if any occurs during the process
    return error;
  }
};

// Exporting the getCountries function
module.exports = { getCountries };