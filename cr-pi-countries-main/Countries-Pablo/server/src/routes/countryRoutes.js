const express = require('express');
const countryHandlers = require('../handlers/countryHandlers');

const countryRoutes = express.Router();

countryRoutes
  .get('/', countryHandlers.getCountryHandler)
  .get('/:id', countryHandlers.getDetailHandler);

module.exports = countryRoutes;