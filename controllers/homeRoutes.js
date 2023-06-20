const router = require('express').Router();
const Op = require('sequelize').Op;
const withAuth = require('../utils/auth');
const { Blogs, User } = require('../models');
require('dotenv').config();


router.get('/', async (req, res) => {
  try {
    const dbRes = await Blogs.findAll({
      include: [User],
    });

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

router.get('/dashboard',withAuth, async (req, res) => {

  try{
    const dbRes = await Blogs.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });

    const blogContent = dbRes.map(blog => {
      return blog.get({ plain: true });
    });
  
    console.log(blogContent);
  
    res.render('dashboard', {
      logged_in: req.session.logged_in,
      name: req.session.name,
      id: req.session.user_id,
      blogContent,
    });
  }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogAdd', withAuth, (req, res) => {

  res.render('blogAdd', {
    logged_in: req.session.logged_in,
    name: req.session.name
  })
})

router.get('/dashboard/edits/:id',withAuth, async (req, res) => {

  try{

    const dbRes = await Blogs.findAll({
      where: {
        id: req.params.id,
      }
    });

    const blogEdit = dbRes.map(blog => {
      return blog.get({ plain: true });
    });
    res.render('editBlog', {
      logged_in: req.session.logged_in,
      name: req.session.name,
      blogEdit
    })
  }catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
