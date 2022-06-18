import {
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { postData } from "../../__lib__/helpers/HttpService";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal infos", "Project 1 ", "Project 2", "Project 3"];
}
const PersonalInfos = () => {
  const { control } = useFormContext();
  const { errors } = useFormState();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Personal Information</h1>
        <h1 className="h-10 w-10 rounded-full bg-gradient-to-t from-purple-600 to-orange-600"></h1>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <Controller
          control={control}
          name="full_name"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.full_name ? true : false}
              id="full-name"
              label="Full Name *"
              variant="standard"
              placeholder="Enter Your First Name"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.email ? true : false}
              id="email"
              label="Email *"
              variant="standard"
              placeholder="Enter Your Email"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.city ? true : false}
              id="city"
              label="City *"
              variant="standard"
              placeholder="Enter Your City"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type="number"
              error={errors.phone ? true : false}
              id="phone"
              label="Phone *"
              variant="standard"
              placeholder="Phone number"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="profile_picture"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.profile_picture ? true : false}
            id="profile"
            label="Profile *"
            variant="standard"
            placeholder="Enter Profile Picture"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="about"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.about ? true : false}
            id="about"
            label="About *"
            variant="standard"
            placeholder="Write about your-self"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        <Controller
          control={control}
          name="website"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.website ? true : false}
              id="website"
              label="Website *"
              variant="standard"
              placeholder="Website link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="instagram"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.instagram ? true : false}
              id="instagram"
              label="Instagram *"
              variant="standard"
              placeholder="Your instagrame profile link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="linkedin"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.linkedin ? true : false}
              id="linkedin"
              label="Linkedin *"
              variant="standard"
              placeholder="Your linkedin profile link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="other_link"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.other_link ? true : false}
              id="other_link"
              label="Other Links *"
              variant="standard"
              placeholder="Other links"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};
const ProjectOne = () => {
  const { control } = useFormContext();
  const { errors } = useFormState();

  return (
    <>
      <Controller
        control={control}
        name="project_title1"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_title1 ? true : false}
            id="project_title1"
            label="Project Title *"
            variant="standard"
            placeholder="Enter your project title"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="project_description1"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_description1 ? true : false}
            id="project_description1"
            label="Description *"
            variant="standard"
            placeholder="Project description"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <div className="mt-5">
        <Controller
          control={control}
          name="project_skill1"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_skill1 ? true : false}
              id="project_skill1"
              label="skills *"
              variant="standard"
              placeholder="Skill "
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <Controller
          control={control}
          name="project_link1"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_link1 ? true : false}
              id="project_link1"
              label="Link to project *"
              variant="standard"
              placeholder="Enter your project link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="project_tools1"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_tools1 ? true : false}
              id="project_tools1"
              label="Tools/Software *"
              variant="standard"
              placeholder="Enter what you are use"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="project_image1"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_image1 ? true : false}
            id="project_image1"
            type="file"
            variant="standard"
            fullWidth
            onChange={(e) => {
              field.onChange(e.target.files[0]);
            }}
          />
        )}
      />
    </>
  );
};
const ProjectTwo = () => {
  const { control } = useFormContext();
  const { errors } = useFormState();
  return (
    <>
      <Controller
        control={control}
        name="project_title2"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_title2 ? true : false}
            id="project_title2"
            label="Project Title *"
            variant="standard"
            placeholder="Enter your project title"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="project_description2"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_description2 ? true : false}
            id="project_description2"
            label="Description *"
            variant="standard"
            placeholder="Project description"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <div className="mt-5">
        <Controller
          control={control}
          name="project_skill2"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_skill2 ? true : false}
              id="project_skill2"
              label="skills *"
              variant="standard"
              placeholder="Skill "
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <Controller
          control={control}
          name="project_link2"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_link2 ? true : false}
              id="project_link2"
              label="Link to project *"
              variant="standard"
              placeholder="Enter your project link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="project_tools2"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_tools2 ? true : false}
              id="project_tools2"
              label="Tools/Software *"
              variant="standard"
              placeholder="Enter what you are use"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="project_image2"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_image2 ? true : false}
            id="project_image2"
            type="file"
            variant="standard"
            fullWidth
            margin="dense"
            onChange={(e) => {
              field.onChange(e.target.files[0]);
            }}
          />
        )}
      />
    </>
  );
};
const ProjectThree = () => {
  const { control } = useFormContext();
  const { errors } = useFormState();
  const [projectImage3, setProjectImage3] = useState(null);
  return (
    <>
      <Controller
        control={control}
        name="project_title3"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_title3 ? true : false}
            id="project_title3"
            label="Project Title"
            variant="standard"
            placeholder="Enter your project title"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="project_description3"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_description3 ? true : false}
            id="project_description3"
            label="Description"
            variant="standard"
            placeholder="Project description"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
      <div className="mt-5">
        <Controller
          control={control}
          name="project_skill3"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_skill3 ? true : false}
              id="project_skill3"
              label="skills"
              variant="standard"
              placeholder="Skill "
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <Controller
          control={control}
          name="project_link3"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_link3 ? true : false}
              id="project_link3"
              label="Link to project"
              variant="standard"
              placeholder="Enter your project link"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="project_tools3"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={errors.project_tools3 ? true : false}
              id="project_tools3"
              label="Tools/Software"
              variant="standard"
              placeholder="Enter what you are use"
              fullWidth
              margin="dense"
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="project_image3"
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error={errors.project_image3 ? true : false}
            id="project_image3"
            type="file"
            variant="standard"
            fullWidth
            margin="dense"
            onChange={(e) => {
              field.onChange(e.target.files[0]);
            }}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfos />;

    case 1:
      return <ProjectOne />;
    case 2:
      return <ProjectTwo />;
    case 3:
      return <ProjectThree />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const [disable, setDisable] = useState(false);
  const [skipData, setSkipData] = useState({});
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      // user information
      full_name: "",
      email: "",
      city: "",
      phone: "",
      profile_picture: "",
      about: "",
      website: "",
      instagram: "",
      linkedin: "",
      other_link: "",

      // project 1
      project_title1: "",
      project_description1: "",
      project_skill1: "",
      project_link1: "",
      project_tools1: "",
      project_image1: null,

      // project 2
      project_title2: "",
      project_description2: "",
      project_skill2: "",
      project_link2: "",
      project_tools2: "",
      project_image2: null,

      // project 3
      project_title3: "",
      project_description3: "",
      project_skill3: "",
      project_link3: "",
      project_tools3: "",
      project_image3: null,
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 3;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = async (data) => {
    setSkipData({...skipData, data})
    if (activeStep == steps.length - 1) {
      const formData = new FormData();

      //personal info
      formData.append("full_name", data.full_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("city", data.city);
      formData.append("profile_picture", data.profile_picture);
      formData.append("about", data.about);
      formData.append("website", data.website);
      formData.append("instagram", data.instagram);
      formData.append("linkedin", data.linkedin);
      formData.append("other_link", data.other_link);

      //project one
      formData.append("project_title1", data.project_title1);
      formData.append("skill1", data.skill1);
      formData.append("project_link1", data.project_link1);
      formData.append("tools1", data.tools1);
      formData.append("project_image1", data.project_image1);
      formData.append("project_description1", data.project_description1);

      //project two

      formData.append("project_title2", data.project_title2);
      formData.append("skill2", data.skill2);
      formData.append("project_link2", data.project_link2);
      formData.append("tools2", data.tools2);
      formData.append("project_image2", data.project_image2);
      formData.append("project_description2", data.project_description2);

      //project three
      formData.append("project_title3", data.project_title3);
      formData.append("skill3", data.skill3);
      formData.append("project_link3", data.project_link3);
      formData.append("tools3", data.tools3);
      formData.append("project_image3", data.project_image3);
      formData.append("project_description3", data.project_description3);
      // here send this data in your specified database

      // submit data function
      const res = await formSubmit(formData);
      if (res.success) {
        // console.log(res.message);
        setDisable(false);
        setActiveStep(activeStep + 1);
      } else {
        setDisable(false);
      }
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = async () => {

    
    const formData = new FormData();
      const {data} = skipData;
      //personal info
      formData.append("full_name", data.full_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("city", data.city);
      formData.append("profile_picture", data.profile_picture);
      formData.append("about", data.about);
      formData.append("website", data.website);
      formData.append("instagram", data.instagram);
      formData.append("linkedin", data.linkedin);
      formData.append("other_link", data.other_link);

      //project one
      formData.append("project_title1", data.project_title1);
      formData.append("skill1", data.skill1);
      formData.append("project_link1", data.project_link1);
      formData.append("tools1", data.tools1);
      formData.append("project_image1", data.project_image1);
      formData.append("project_description1", data.project_description1);

      //project two

      formData.append("project_title2", data.project_title2);
      formData.append("skill2", data.skill2);
      formData.append("project_link2", data.project_link2);
      formData.append("tools2", data.tools2);
      formData.append("project_image2", data.project_image2);
      formData.append("project_description2", data.project_description2);

      const res = await formSubmit(formData)
      if(res.success) {
        // console.log(res.message)
        setDisable(false)
        if (!isStepSkipped(activeStep)) {
          setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
      }else{
        setDisable(false)
      }

    
  };

  const formSubmit = async (data) => {
    setDisable(true);
    return await postData("/join-us", data, setDisable);
  };
  // const onSubmit = (data) => {
  //   if (activeStep == steps.length - 1) {
  //     console.log(data);
  //     setActiveStep(activeStep + 1);
  //   } else {
  //     setActiveStep(activeStep + 1);
  //     setSkippedSteps(
  //       skippedSteps.filter((skipItem) => skipItem !== activeStep)
  //     );
  //   }
  // };
  return (
    <>
      <div className="w-full  ">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      {/* <div className="my-6"> */}
      {activeStep === steps.length ? (
        <div className="w-full text-center my-4">
          <AiFillCheckCircle className="w-20 h-20 mx-auto text-blue-600" />
          <h1 className="text-2xl uppercase my-2">Thank You</h1>
          <p>Your message to receive a project quote in 24 - 48 hours.</p>
        </div>
      ) : (
        <>
          <FormProvider {...methods}>
            <form
              encType="multipart/form-data"
              onSubmit={methods.handleSubmit(handleNext)}
              className="py-2"
            >
              {getStepContent(activeStep)}

              <div className="mt-4 mb-4">
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSkip}
                    disabled={disable}
                  >
                    skip
                  </Button>
                )}
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                  disabled={disable}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next step"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </>
  );
};

export default LinaerStepper;
