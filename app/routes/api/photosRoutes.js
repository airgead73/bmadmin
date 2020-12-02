const express = require('express');
const router = express.Router();

const photos_controller = require('../../controllers/api/photosControllers');
const handleUpload = require('../../middleware/handleUpload');
const handleCloud = require('../../middleware/handleCloud');

router
  .route('/')
  .post(handleUpload, handleCloud, photos_controller.upload);

module.exports = router;