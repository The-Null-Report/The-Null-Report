const router = require('express').Router();
const { Paper, User } = require('../models/');
const { adminAuth, reviewerAuth, publisherAuth } = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.redirect('login');
    }
})

module.exports = router;