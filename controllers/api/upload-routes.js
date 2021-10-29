require('dotenv/config');
const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
})

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

const upload = multer({storage}).single('file');

router.post('/', upload, (req, res) => {
    let currentFile = req.file.originalname.split(".");
    const fileType = currentFile[currentFile.length - 1];

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileType,
        Body: req.file.buffer
    };

    s3.upload(params, (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).send(data);
        }
    })

});

module.exports = router;