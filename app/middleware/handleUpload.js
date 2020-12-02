const multer = require('multer');
const path = require('path');

const uploadImage = function(req, res, next) {

  const storage = multer.diskStorage({ 
    destination: './app/public/uploads/',
    filename: function(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 10 }
  }).single('myImage');

  upload(req, res, (err) => {

    if(err) {
      //res.send(`${err}`);
      res.locals.uploadMsg = err;
    } else {
      console.log(req.file);
      //res.send('test');
      res.locals.uploadMsg = 'success'
    }

    next();

  });  

}



module.exports = uploadImage;