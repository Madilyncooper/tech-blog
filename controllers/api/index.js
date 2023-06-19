const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes')
const editPostRoutes = require('./editRoutes')

router.use('/users', userRoutes);
router.use('/blogAdd', blogPostRoutes);

module.exports = router;
