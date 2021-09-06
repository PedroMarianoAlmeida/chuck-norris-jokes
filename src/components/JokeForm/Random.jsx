import { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const Random = () => {
  const {
    initialNumberOfNumberJokes,
    numberOfRandomJokes,
    setNumberOfNumberJokes,
    setCurrentTab,
  } = useContext(JokeFormContext);

  setCurrentTab("random");

  const handleChange = (event, newValue) => {
    setNumberOfNumberJokes(newValue);
  };

  return (
    <>
      <Typography align="center">Number of jokes</Typography>
      <Slider
        defaultValue={initialNumberOfNumberJokes}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
        value={numberOfRandomJokes}
        onChange={handleChange}
      />
    </>
  );
};

export default Random;
