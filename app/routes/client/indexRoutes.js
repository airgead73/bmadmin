const express = require('express');
const router = express.Router();

const index_controller = require('../../controllers/client/indexControllers');

router
  .route('/')
  .get(
    index_controller.dashboard
  );

router
  .route('/signin')
  .get(
    index_controller.signin
  ); 
  
module.exports = router;  