const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dd1wlitsu',
    api_key: '816753189867287',
    api_secret: 'MWYRo8KGVENvI-8E0iyq1KVTfjo'
});

// Configure storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'freedom-road',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 500, height: 500, crop: 'limit' }]
    }
});

// Configure upload
const upload = multer({ storage: storage });

module.exports = {
    cloudinary,
    upload
}; 