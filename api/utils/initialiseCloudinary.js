const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadImage(image) {
    try {
        const result = await cloudinary.v2.uploader.upload(image);
        return { public_id: result.public_id, url: result.url };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function destroyImage(public_id) {
    try {
        await cloudinary.v2.uploader.destroy(public_id);
        return { message: "Image has been successfully deleted" };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { uploadImage, destroyImage };
