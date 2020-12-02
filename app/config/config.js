module.exports = {
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  DB_DEV: process.env.MONGO_URI_DEV,
  DB: process.env.MONGO_URI,
  ISDEV: process.env.NODE_ENV === 'development',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXP: process.env.JWT_EXP,
  PORT: process.env.PORT,
  RATE_LIMIT: 100,
  SALT_ROUNDS: process.env.SALT_ROUNDS,  
  SESSION_EXP: 86400000,
  SESSION_SECRET: process.env.SESSION_SECRET    
};