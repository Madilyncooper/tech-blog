const router = require('express').Router();
const { Comments, Blogs, User } = require('../../models');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const dbRes = await Comments.findAll();
    res.json(dbRes);
  } catch (error) {
    res.json({ err: 'Uh oh...' });
  }
});

router.post('/', async (req, res) => {
  try {
    const dbRes = await Comments.create({
      
      body: req.body.body,
      user_id: req.session.user_id,
      blog_id: req.body.postId,

    });
    res.status(200).json(dbRes);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;