const router = require('express').Router();
const { papers } = require('../../models');

router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const newPaper = await papers.create({ ...body, user_id: req.session.user_id });
        res.json(newPaper);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [affectedRows] = await papers.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const [affectedRows] = papers.destroy({
            where: {
                id: req.params.id,
            },
        });

        if ( affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        } 
    } catch (err) {
        res.status(500).json(err);
    }
});