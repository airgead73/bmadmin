const express = require('express');
const router = express.Router();

const works_controller = require('../../controllers/api/worksControllers');

router
  .route('/')
  .get(works_controller.get)
  .post(works_controller.create);

router
  .route('/:workID')
  .get(works_controller.detail)
  .put(works_controller.update)
  .delete(works_controller.delete);

module.exports = router;