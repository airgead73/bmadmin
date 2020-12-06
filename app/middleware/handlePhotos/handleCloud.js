const { cloudinary } = require('../../config/cloudinary');
const fs = require('fs');
const Work = require('../../models/Work');

const uploadCloud = async function(req, res, next) {

  console.log(req.params.workID);

  const work = await Work.find({ id: req.params.workID});

  console.log(work.mode);

  // const work = await Work.findById(req.params.workID);
  // console.log(work);

  const cloudFile = await cloudinary.uploader.upload('uploads/temp', {
    folder: 'bmadmin/',
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

  console.log('uploaded to cloud');

  fs.unlinkSync('uploads/temp');

  res.cloudData = cloudFile

  next(); 

}



module.exports = uploadCloud;



