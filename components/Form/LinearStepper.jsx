import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

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
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Personal Information</h1>
        <h1 className="h-10 w-10 rounded-full bg-gradient-to-t from-purple-600 to-orange-600"></h1>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => (
            <TextField
              id="full-name"
              label="Full Name"
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
          render={({ field }) => (
            <TextField
              id="email"
              label="Email"
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
          render={({ field }) => (
            <TextField
              id="city"
              label="City"
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
          render={({ field }) => (
            <TextField
              id="phone"
              label="Phone"
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
        name="profile"
        render={({ field }) => (
          <TextField
            id="profile"
            label="Profile"
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
        render={({ field }) => (
          <TextField
            id="about"
            label="About"
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
          render={({ field }) => (
            <TextField
              id="website"
              label="Website"
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
          render={({ field }) => (
            <TextField
              id="instagram"
              label="Instagram"
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
          render={({ field }) => (
            <TextField
              id="linkedin"
              label="Linkedin"
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
          name="otherLinks"
          render={({ field }) => (
            <TextField
              id="other-link"
              label="Other Links"
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
  return (
    <>
      <Controller
        control={control}
        name="projectOneTitle"
        render={({ field }) => (
          <TextField
            id="projecttitle"
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
        name="projectOneDescription"
        render={({ field }) => (
          <TextField
            id="description"
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
          name="projectOneSkill"
          render={({ field }) => (
            <TextField
              id="skills"
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
          name="projectOneLink"
          render={({ field }) => (
            <TextField
              id="linktoproject"
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
          name="projectOneTools"
          render={({ field }) => (
            <TextField
              id="tools"
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
        name="projectOneImage"
        render={({ field }) => (
          <TextField
            id="projectOneImage"
            type="file"
            variant="standard"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
    </>
  );
};
const ProjectTwo = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="projectTwoTitle"
        render={({ field }) => (
          <TextField
            id="projecttitle"
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
        name="projectTwoDescription"
        render={({ field }) => (
          <TextField
            id="description"
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
          name="projectTwoSkill"
          render={({ field }) => (
            <TextField
              id="skills"
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
          name="projectTwoLink"
          render={({ field }) => (
            <TextField
              id="linktoproject"
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
          name="projectOneTools"
          render={({ field }) => (
            <TextField
              id="tools"
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
        name="projectTwoImage"
        render={({ field }) => (
          <TextField
            id="projectTwoImage"
            type="file"
            variant="standard"
            fullWidth
            margin="dense"
            {...field}
          />
        )}
      />
    </>
  );
};
const ProjectThree = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="projectThreeTitle"
        render={({ field }) => (
          <TextField
            id="projecttitle"
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
        name="projectThreeDescription"
        render={({ field }) => (
          <TextField
            id="description"
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
          name="projectThreeSkill"
          render={({ field }) => (
            <TextField
              id="skills"
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
          name="projectThreeLink"
          render={({ field }) => (
            <TextField
              id="linktoproject"
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
          name="projectThreeTools"
          render={({ field }) => (
            <TextField
              id="tools"
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
        name="projectThreeImage"
        render={({ field }) => (
          <TextField
            id="projectThreeImage"
            type="file"
            variant="standard"
            fullWidth
            margin="dense"
            {...field}
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
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      // user information
      fullName: "",
      email: "",
      city: "",
      phone: "",
      profile: "",
      about: "",
      website: "",
      instagram: "",
      linkedin: "",
      otherLinks: "",

      // project 1
      projectOneTitle: "",
      projectOneDescription: "",
      projectOneSkill: "",
      projectOneLink: "",
      projectOneTools: "",
      projectOneImage: null,

      // project 2
      projectTwoTitle: "",
      projectTwoDescription: "",
      projectTwoSkill: "",
      projectTwoLink: "",
      projectTwoTools: "",
      projectTwoImage: null,

      // project 3
      projectThreeTitle: "",
      projectThreeDescription: "",
      projectThreeSkill: "",
      projectThreeLink: "",
      projectThreeTools: "",
      projectThreeImage: null,
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

  const handleNext = (data) => {
    if (activeStep == steps.length - 1) {
      console.log(data);
      // here send this data in your specified database
      setActiveStep(activeStep + 1);
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

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
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
                    onClick={handleSkip}
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
