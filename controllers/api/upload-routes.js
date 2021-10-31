require('dotenv/config');
const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3({
    accessKeyId: 'AKIASDWXVSSKI7SL6BPO',
    secretAccessKey: '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'
})

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
    console.log(req.body);
    let currentFile = req.file.originalname.split(".");
    const fileType = currentFile[currentFile.length - 1];

    console.log(req.file);

    const params = {
        Bucket: 'the-null-report',
        Key: `${uuidv4()}.${fileType}`,
        Body: req.file.buffer
    };

    s3.upload(params, (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).send(data);
        }
    });

});

module.exports = router;