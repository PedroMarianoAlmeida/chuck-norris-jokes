import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const NumberOfJokes = () => {
  return (
    <>
      <Typography align="center">Number of jokes</Typography>
      <Slider
        defaultValue={1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
      />
    </>
  );
};

export default NumberOfJokes;
