import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import nc from 'next-connect';
import streamifier from 'streamifier';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
  
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = nc();
const upload = multer();

handler.use( upload.array('images')).post(async (req, res) => {

    console.log(req.body)

    const streamUpload = (file) => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
            streamifier.createReadStream(file.buffer).pipe(stream);
        });
    };

    let images=[]; 
    const files = req.files;
    for (const file of files) {
        const image = await streamUpload(file);
        images.push(image.secure_url);
    }

    res.send(images);

});

export default handler;
