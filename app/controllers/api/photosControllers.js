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
    const uploadedFile = await cloudinary.uploader.upload('uploads/temp', {
      folder: 'dev/bmadmin/',
      tags: 'art',
      eager: [
        {width: 300, height: 300, crop: 'fill'},
        {
          color: '#ffffff',
          gravity: 'south_east',
          overlay: {
            font_family: 'Roboto',
            font_size: 10,
            text: '%C2%A9%20Brian%20Moneypenny'
          },
          x: 8,
          y: 8
        }
      ]
      });
    console.log(uploadedFile);
    fs.unlinkSync('uploads/temp');
    res.json({
      uploadedFile
    })
  }

  

 });