//changed rec.session.admin !== tier_id to !req.session.admin
const adminAuth = (req, res, next) => {
    if (!req.session.logged_in && !req.session.admin) {
        res.redirect('/login');
    } else {
        next();
    }
};

//changed rec.session.tier_id !== 2 to !rec.session.reviewer
const reviewerAuth = (req, res, next) => {
    if (!req.session.logged_in && !req.session.reviewer) {
        res.redirect('/login');
    } else {
        next();
    }
};

//removed tier_id 2 conditional as all logged in users should be able to access this route
const publisherAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = { adminAuth, reviewerAuth, publisherAuth };