const asyncHandler = require('../../middleware/handleAsync');

/**
 * @route POST /api/photos
 * @desc create photos
 * @access private
 */

 exports.create = asyncHandler(async function(req, res) {  

  console.log(res.photoData);

    res.json({
      success: true,
      photoData: res.photoData
    });


 });