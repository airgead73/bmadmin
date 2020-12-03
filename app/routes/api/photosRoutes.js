const express = require('express');
const router = express.Router();

const photos_controller = require('../../controllers/api/photosControllers');
const handleUpload = require('../../middleware/handlePhotos/handleUpload');
const handleCloud = require('../../middleware/handlePhotos/handleCloud');
const handleData = require('../../middleware/handlePhotos/handleData');

router
  .route('/')
  .post(
    handleUpload, 
    handleCloud, 
    handleData,
    photos_controller.upload
  );

module.exports = router;