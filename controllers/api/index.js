const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const updateRoutes = require('./updateBlogRoutes')


router.use('/users', userRoutes);
router.use('/blogAdd', blogPostRoutes);
router.use('/editBlog', updateRoutes);



module.exports = router;
