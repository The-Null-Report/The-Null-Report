const router = require('express').Router();
const { Paper, User } = require('../models/');
const { withAuth } = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        if (req.session.admin === true) {
            res.render('tier-four-dashboard', {
                layout: 'dashboard',
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
})

module.exports = router;