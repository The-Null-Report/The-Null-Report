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
            res.render('tier-two-dashboard', {
                layout: 'dashboard',
            });
        }
    } catch (err) {
        res.redirect('login');
    }
})

module.exports = router;