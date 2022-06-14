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
      type: Array,
      project1: {
        project_title: {
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
        },
        skill: {
          type: String,
          required: false,
          trim: true,
        },
        project_link: {
          type: String,
          required: false,
          trim: true,
        },
        tools: {
          type: String,
          required: false,
          trim: true,
        },
        project_image: {
          type: String,
          required: false,
          trim: true,
        },
      },
    },
    societyName: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    pinCode: {
      type: String,
      required: true,
      trim: true,
    },
    floorNo: {
      type: String,
      required: true,
      trim: true,
    },
    facing: {
      type: String,
      required: true,
      trim: true,
    },
    furnishedStatus: {
      type: String,
      required: true,
      trim: true,
    },
    availability: {
      type: String,
      required: true,
      trim: true,
    },
    totalFloors: {
      type: String,
      required: true,
      trim: true,
    },
    balconies: {
      type: String,
      required: true,
      trim: true,
    },
    ageConstruction: {
      type: String,
      required: true,
      trim: true,
    },
    tenantsPreferred: {
      type: String,
      required: true,
      trim: true,
    },
    vegPermission: {
      type: String,
      required: true,
      trim: true,
    },
    petsPermission: {
      type: String,
      required: true,
      trim: true,
    },
    amenities: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    monthlyRent: {
      type: Number,
      required: true,
    },
    maintenanceCharges: {
      type: Number,
      required: true,
    },
    securityAmount: {
      type: Number,
      required: true,
    },
    basis: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    _owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.JoinUs || mongoose.model("JoinUs", joinUsSchema);
