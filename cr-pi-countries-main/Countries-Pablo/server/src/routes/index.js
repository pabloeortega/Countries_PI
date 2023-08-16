const { Router } = require('express');
const countryRoutes = require('./countryRoutes');
const getActivityRoutes = require('./activityRoutes');
const postActivityRoutes = require('./postActivityRoutes');

const router = Router();

router.use('/countries', countryRoutes);
router.use('/activities', getActivityRoutes, postActivityRoutes);

module.exports = router;