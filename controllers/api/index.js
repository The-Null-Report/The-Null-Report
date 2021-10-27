const router = require('express').Router();

const paperRoutes = require('./paper-routes');
const userRoutes = require('./user-routes');

router.use('/paper', paperRoutes);
router.use('/user', userRoutes);

module.exports = router;