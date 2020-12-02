const multer = require('multer');
const path = require('path');

const uploadImage = function(req, res, next) {

  function checkFileType(file, cb) {
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
    limits: { fileSize: 10 },
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('myImage');

  upload(req, res, (err) => {

    if(err) {
      res.locals.uploadMsg = err.message;
    } else {
      console.log(req.file);
      res.locals.uploadMsg = 'success'
    }

    next();

  });  

}



module.exports = uploadImage;