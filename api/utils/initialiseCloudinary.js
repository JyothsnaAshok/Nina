const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: "desoyd8gm",
    api_key: "626889563345114",
    api_secret: "S4F7D4iEyLxEcIHi1SyWVHPpiEk",
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
