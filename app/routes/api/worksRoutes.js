const express = require('express');
const router = express.Router();
const Work = require('../../models/Work');

const works_controller = require('../../controllers/api/worksControllers');
const handleQuery = require('../../middleware/handleQuery');

router
  .route('/')
  .get(handleQuery(Work), works_controller.get)
  .post(works_controller.create);

router
  .route('/:workID')
  .get(works_controller.detail)
  .put(works_controller.update)
  .delete(works_controller.delete);

module.exports = router;