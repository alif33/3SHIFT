import nc from "next-connect";
import Joinus from "../../../models/Joinus";
import db from "../../../utils/db";

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

const handler = nc();
// const upload = multer();

handler.post(async (req, res) => {
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
    skill1,
    project_link1,
    tools1,
    project_image1,
    project_title2,
    skill2,
    project_link2,
    tools2,
    project_image2,
    project_title3,
    skill3,
    project_link3,
    tools3,
    project_image3,
  } = req.body;

  await db.connect();

  const joinUs = new Joinus({
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
    projects: [
      {
        project1: {
          project_title: project_title1,
          skill: skill1,
          tools: tools1,
          project_link: project_link1,
          project_image: project_image1,
        },
      },
      {
        project2: {
          project_title: project_title2,
          skill: skill2,
          tools: tools2,
          project_link: project_link2,
          project_image: project_image2,
        },
      },
      {
        project3: {
          project_title: project_title3,
          skill: skill3,
          tools: tools3,
          project_link: project_link3,
          project_image: project_image3,
        },
      },
    ],
  });

  if (await joinUs.save()) {
    await db.disconnect();
    res.status(201).json({
      success: true,
      message: "Submitted successfully",
    });
  }
});

export default handler;
