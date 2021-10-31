const router = require('express').Router();
const { Paper, User } = require('../models/');
const { withAuth } = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        if (req.session.admin === true) {
            const users = await User.findAll();
            
            console.log(users);
            
            res.render('tier-four-dashboard', {
                layout: 'dashboard',
                users,
            });
        } else if (req.session.admin === false && req.session.reviewer === true) {
            res.render('tier-three-dashboard', {
                layout: 'dashboard',
            });
        } else {
            const paperData = await Paper.findAll({
                where: {
                    publisher_id: req.session.userId,
                },
            });

            const papers = paperData.map((paper) => paper.get({ plain: true }));

            res.render('tier-two-dashboard', {
                layout: 'dashboard',
                papers,
            });
        }
    } catch (err) {
        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

module.exports = router;