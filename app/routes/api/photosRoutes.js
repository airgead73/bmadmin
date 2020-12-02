const express = require('express');
const router = express.Router();

const photos_controller = require('../../controllers/api/photosControllers');


router
  .route('/')
  .post(photos_controller.upload);

module.exports = router;