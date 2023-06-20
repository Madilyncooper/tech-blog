const router = require('express').Router();
const { Comments } = require('../../models');
require('dotenv').config();

router.post('/', async (req, res) => {
  try {
    const newComment = await Comments.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;