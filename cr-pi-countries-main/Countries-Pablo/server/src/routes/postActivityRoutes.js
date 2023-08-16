const express = require('express');
const postActivityHandler = require('../handlers/activityHandlers').postActivityHandler;
const postActivityRoutes = express.Router();

postActivityRoutes.post('/', postActivityHandler);

module.exports = postActivityRoutes;
