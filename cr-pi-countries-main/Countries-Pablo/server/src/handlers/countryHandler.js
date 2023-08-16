const { getCountries }  = require('../controllers/Country/getCountries');
const { getCountryId }  = require ('../controllers/Country/getCountryById');
const { getCountryByName } = require('../controllers/Country/getCountrybyName');

const getCountryHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(!name) {
            const allCountries = await getCountries();
            res.status(200).json(allCountries);
        } else {
            const filteredCountry = await getCountryByName(name);
            if (filteredCountry.length > 0) {
                res.status(200).json(filteredCountry);
            } else {
                throw new Error('Country not Found');
            }
        }
    } catch (error) {
        res.status(error.message === 'Country not Found' ? 400 : 500).json({ error: error.message });
    }
};

const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const country = await getCountryById(id);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getCountryHandler,
    getDetailHandler,
  };