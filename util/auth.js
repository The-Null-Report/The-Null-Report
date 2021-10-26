const adminAuth = (req, res, next) => {
    if (!req.session.logged_in && req.session.tier_id !== 4) {
        res.redirect('/login');
    } else {
        next();
    }
};

const reviewerAuth = (req, res, next) => {
    if (!req.session.logged_in && req.session.tier_id !== 3) {
        res.redirect('/login');
    } else {
        next();
    }
};

const publisherAuth = (req, res, next) => {
    if (!req.session.logged_in && req.session.tier_id !== 2) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = { adminAuth, reviewerAuth, publisherAuth };