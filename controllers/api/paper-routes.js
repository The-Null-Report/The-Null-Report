const router = require('express').Router();
const { Paper } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const paperData = await Paper.findAll({});
        res.json(paperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const paperData = await Paper.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(paperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const paperData = await Paper.create({ userId: req.session.userId });
        res.json(paperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateData = await Paper.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updateData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const [affectedRows] = Paper.destroy({
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

module.exports = router;