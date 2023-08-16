const { getCountries }  = require('../controllers/Country/getCountries');
const { getCountryById }  = require ('../controllers/Country/getCountryById.js');
const { getCountryByName } = require('../controllers/Country/getCountryByName');

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
        
        //sends an error message back to the client with a status code of 400 if the error message is 'Country not Found', or 500 for any other error.
    }
};

const getDetailHandler = async (req, res) => {
    try {       //req.params.id to the getCountryById function.
      res.status(200).json(await getCountryById(req.params.id)); 
       
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  module.exports = {
    getCountryHandler,
    getDetailHandler,
  };