const router = require('express').Router();
const { papers } = require('../models/');
const { adminAuth, reviewerAuth, publisherAuth } = require('../util/auth');

//admin route for retrieving all papers
router.get('/', adminAuth, async (req, res) => {
    try{
        const postPaper = await papers.findAll();

        const papersPlain = postPaper.map((paper) => papers.get({ plain: true}));

        res.render('all-posts', {
            layout: 'dashboard',
            papersPlain
        })
    } catch (err) {
        res.redirect('login');
    }
});

//create a route for reviewers to retrieve all exisiting papers, approved or not
router.get('/', reviewerAuth, async (req, res) => {
    try{
        const postPaper = await papers.findAll();

        const papersPlain = postPaper.map((paper) => papers.get({ plain: true}));

        res.render('all-posts', {
            layout: 'dashboard',
            papersPlain
        })
    } catch (err) {
        res.redirect('login');
    }
});

//created a route for reviewers to retrieve a specific paper to edit
router.get('/edit/:id', reviewerAuth, async (req, res) => {
    try {
        const postPaper = await papers.findByPk(req.params.id);

        if (postPaper) {
            const paper = postPaper.get({ plain: true });

            res.render('', {
                layout: 'dashboard',
                paper,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;