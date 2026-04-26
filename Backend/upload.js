const cloudinary  = require('cloudinary').v2;
const multer      = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];

const makeStorage = (folder) => new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder:         `medlinka/${folder}`,
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 800, height: 800, crop: 'limit', quality: 'auto' }],
    public_id:      `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
  }),
});

const fileFilter = (req, file, cb) => {
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, and WebP images are allowed'), false);
  }
};

exports.uploadAvatar   = multer({ storage: makeStorage('avatars'),   fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
exports.uploadMedicine = multer({ storage: makeStorage('medicines'),  fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });
exports.uploadCert     = multer({ storage: makeStorage('certs'),      fileFilter, limits: { fileSize: 10 * 1024 * 1024 } });
exports.cloudinary     = cloudinary;
