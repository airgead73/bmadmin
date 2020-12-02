const asyncHandler = require('../../middleware/handleAsync');
const { cloudinary } = require('../../config/cloudinary');
const fs = require('fs');

/**
 * @route POST /api/photos
 * @desc Upload photos
 * @access private
 */

 exports.upload = asyncHandler(async function(req, res) {  

    res.json({
      uploadData: res.uploadData,
      cloudData: res.cloudData
    });

 });