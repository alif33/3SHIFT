import mongoose from "mongoose";

const joinUsSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    profile_picture: {
      type: String,
      required: true,
      trim: true,
    },
    about: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      required: true,
      trim: true,
    },
    instagram: {
      type: String,
      required: true,
      trim: true,
    },
    linkedin: {
      type: String,
      required: true,
      trim: true,
    },
    other_link: {
      type: String,
      required: true,
      trim: true,
    },
    projects: {
      project1: {
        project_title: {
          type: String,
          required: true,
          trim: true,
        },
        description: {
          type: String,
          required: true,
          trim: true,
        },
        skill: {
          type: String,
          required: true,
          trim: true,
        },
        project_link: {
          type: String,
          required: true,
          trim: true,
        },
        tools: {
          type: String,
          required: true,
          trim: true,
        },
        project_image: {
          type: String,
          required: true,
          trim: true,
        },
      },
      project2: {
        project_title: {
          type: String,
          required: true,
          trim: true,
        },
        description: {
          type: String,
          required: true,
          trim: true,
        },
        skill: {
          type: String,
          required: true,
          trim: true,
        },
        project_link: {
          type: String,
          required: true,
          trim: true,
        },
        tools: {
          type: String,
          required: true,
          trim: true,
        },
        project_image: {
          type: String,
          required: true,
          trim: true,
        },
      },
      project3: {
        project_title: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
        description: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
        skill: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
        project_link: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
        tools: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
        project_image: {
          type: String,
          required: false,
          trim: true,
          default: "",
        },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.JoinUs || mongoose.model("JoinUs", joinUsSchema);
