const express = require('express');
const router = express.Router();

const photos_controller = require('../../controllers/api/photosControllers');
const handleUpload = require('../../middleware/handleUpload');

router
  .route('/')
  .post(handleUpload, photos_controller.upload);

module.exports = router;