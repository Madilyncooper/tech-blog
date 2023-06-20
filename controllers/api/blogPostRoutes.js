const router = require('express').Router();
const { Blogs } = require('../../models');
require('dotenv').config();


router.get('/', async (req, res) => {
    try {
        const dbRes = await Blogs.findAll();
        res.json(dbRes);
    } catch (error) {
        res.json({ err: 'Uh oh...' });
    }
});

router.post('/', async (req, res) => {
    try {
        const dbRes = await Blogs.create({

            user_id: req.session.user_id,
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
        });
        res.status(200).json(dbRes);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



module.exports = router;