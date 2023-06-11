const router = require('express').Router();
const Op = require('sequelize').Op;
const withAuth = require('../utils/auth');
const { Blogs } = require('../models');
require('dotenv').config();


router.get('/', async (req, res) => {
  try {
    const dbRes = await Blogs.findAll();

    const blogContent = dbRes.map(blog => {
      return blog.get({ plain: true });
    });
    console.log(blogContent);

    res.render('homepage', {
      logged_in: req.session.logged_in,
      name: req.session.name,
      blogContent,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/dashboard',withAuth, (req, res) => {

  res.render('dashboard', {
    logged_in: req.session.logged_in,
    first_name: req.session.first_name
  });
});

router.get('/blogAdd', withAuth, (req, res) => {

  res.render('blogAdd', {
    logged_in: req.session.logged_in,
    name: req.session.first_name
  })
})




module.exports = router;
