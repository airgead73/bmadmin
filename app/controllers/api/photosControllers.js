const asyncHandler = require('../../middleware/handleAsync');


/**
 * @route POST /api/photos
 * @desc Upload photos
 * @access private
 */

 exports.upload = asyncHandler(async function(req, res) {

  return res
    .status(200)
    .json({
      success: true,
      msg: 'Photo upload route'
    });

 });