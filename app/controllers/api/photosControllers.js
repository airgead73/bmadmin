const asyncHandler = require('../../middleware/handleAsync');\
\

/**
 * @route POST /api/photos
 * @desc Upload photos
 * @access private
 */

 exports.upload = asyncHandler(async function(req, res) {  

    res.json({
      photoData: res.photoData
    });

 });