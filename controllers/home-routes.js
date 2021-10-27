const router = require('express').Router();
const { papers } = require('../models');

//get all papers for homepage
router.get('/', async (req, res) => {
    try {
        const paperData = await papers.findAll({
            inlude: [users],
        });

        const papersPlain = paperData.map((paper) => paper.get({ plain: true }));

        res.render('homepage', { papersPlain });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a single post
router.get('/post/:id', async (req, res) => {
    try {
        const paperData = await papers.findByPk(req.params.id, {
            include: [users],
        });

        if (paperData) {
            const paperPlain = paperData.get({ plain: true });

            res.render('single-post', { paperPlain });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        returnl
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;