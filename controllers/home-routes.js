const router = require('express').Router();
const { Paper, User } = require('../models');

//get all Paper for homepage
router.get('/', async (req, res) => {
    try {
        const paperData = await Paper.findAll();

        const papers = paperData.map((paper) => paper.get({ plain: true }));

        res.render('homepage', {
            papers,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get a single post
router.get('/paper/:id', async (req, res) => {
    try {
        const paperData = await Paper.findByPk(req.params.id, {
            include: [User],
        });

        if (paperData) {
            const paper = paperData.get({ plain: true });

            res.render('single-paper', { paper });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;