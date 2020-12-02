const multer = require('multer');
const path = require('path');

const uploadImage = function(req, res, next) {

  const checkFileType = function(req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);


    if(mimetype && extname) {
      return cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Wrong file type'));
    }

  }

  const storage = multer.diskStorage({ 
    destination: './app/public/uploads/',
    filename: function(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: checkFileType
  }).single('myImage');

  upload(req, res, (err) => {

    if(err) {
      res.locals.uploadMsg = err.message;
    } else if (req.file == undefined) {
      console.log(req.file);
      res.locals.uploadMsg = 'No file uploaded.'
    } else {
      res.locals.uploadMsg = 'Success'
    }

    next();

  });  

}



module.exports = uploadImage;