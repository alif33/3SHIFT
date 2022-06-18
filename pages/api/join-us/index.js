import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";
import streamifier from "streamifier";
import JoinUs from "../../../models/JoinUs";
import db from "../../../utils/db";

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

handler
  .use(
    upload.fields([
      { name: "project_image1", maxCount: 1 },
      { name: "project_image2", maxCount: 1 },
      { name: "project_image3", maxCount: 1 },
    ])
  )
  .post(async (req, res) => {
console.log(req.body.project_link1)
    const streamUpload = (file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(file).pipe(stream);
      });
    };

    const project_image1 = await streamUpload(
      req.files.project_image1[0].buffer
    );
    const project_image2 = await streamUpload(
      req.files.project_image2[0].buffer
    );
    let project_image3;
    if (req.files?.project_image3) {
      project_image3 = await streamUpload(req.files.project_image3[0].buffer);
    }

    const {
      full_name,
      email,
      city,
      phone,
      profile_picture,
      about,
      website,
      instagram,
      linkedin,
      other_link,
      project_title1,
      project_description1,
      skill1,
      project_link1,
      tools1,
      project_title2,
      project_description2,
      skill2,
      project_link2,
      tools2,
      project_title3,
      project_description3,
      skill3,
      project_link3,
      tools3,
    } = req.body;

    if ((project_image1 && project_image2) || project_image3) {
      await db.connect();
      const joinUs = new JoinUs({
        full_name,
        email,
        city,
        phone,
        profile_picture,
        about,
        website,
        instagram,
        linkedin,
        other_link,
        projects: {
          project1: {
            project_title: project_title1,
            description: project_description1,
            skill: skill1,
            tools: tools1,
            project_link: project_link1,
            project_image: project_image1.url,
          },
          project2: {
            project_title: project_title2,
            description: project_description2,
            skill: skill2,
            tools: tools2,
            project_link: project_link2,
            project_image: project_image2.url,
          },

          project3: {
            project_title: project_title3 || "",
            description: project_description3 || "",
            skill: skill3 || "",
            tools: tools3,
            project_link: project_link3 || "",
            project_image: project_image3?.url || "",
          },
        },
      });

      if (await joinUs.save()) {
        await db.disconnect();
        res.status(200).json({
          success: true,
          message: "Submitted successfully",
        });
      }
    } else {
      res.status(401).json({
        success: true,
        message: "Server Error",
      });
    }
  });

export default handler;
