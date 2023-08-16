const express = require('express');
const { getActivityHandler } = require('../handlers/activityHandlers');

const activityRoutes = express.Router();

activityRoutes.get("/", getActivityHandler);

module.exports = activityRoutes;
