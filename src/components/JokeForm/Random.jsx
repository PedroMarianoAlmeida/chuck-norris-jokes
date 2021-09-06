import { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const Random = () => {
  const { example } = useContext(JokeFormContext);
  console.log(example);
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

export default Random;
