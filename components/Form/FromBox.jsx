import { CssBaseline, Container, Box } from "@material-ui/core";
import LinaerStepper from "./LinearStepper";
const FromBox = () => {
  return (
    <>
      <div className="md:w-1/2  mx-auto shadow-xl rounded-xl md:p-4 bg-white text-black mb-10 ">
        <CssBaseline />
        <Container component={Box} p={4}>
          <LinaerStepper />
        </Container>
      </div>
    </>
  );
};

export default FromBox;
