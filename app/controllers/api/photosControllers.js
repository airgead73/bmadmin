const asyncHandler = require('../../middleware/handleAsync');
const { cloudinary } = require('../../config/cloudinary');
const fs = require('fs');

/**
 * @route POST /api/photos
 * @desc Upload photos
 * @access private
 */

 exports.upload = asyncHandler(async function(req, res) {

  const msg = res.locals.uploadMsg;
  const uploadFile = res.locals.uploadFile;

  console.log(uploadFile);

  if(res.locals.success) {
    const uploadedResponse = await cloudinary.uploader.upload('uploads/temp', {
      upload_preset: 'bmadmin'
    });
    console.log(uploadedResponse);
    fs.unlinkSync('uploads/temp');

  }

  res.send(msg);

 });