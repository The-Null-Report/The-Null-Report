const router = require('express').Router();
const { Paper, User } = require('../models/');
const { withAuth } = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('dashboard', {
            layout: 'dashboard',
        });
    } catch (err) {
        res.redirect('login');
    }
})

module.exports = router;