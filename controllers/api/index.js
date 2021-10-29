const router = require('express').Router();

const paperRoutes = require('./paper-routes');
const userRoutes = require('./user-routes');
const uploadRoutes = require('./upload-routes');

router.use('/paper', paperRoutes);
router.use('/user', userRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;