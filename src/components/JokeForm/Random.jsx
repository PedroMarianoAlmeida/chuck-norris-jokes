import { useContext, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const Random = () => {
  const {
    initialNumberOfNumberJokes,
    maxNumberOfJokes,
    numberOfRandomJokes,
    setNumberOfNumberJokes,
    setCurrentTab,
  } = useContext(JokeFormContext);

  useEffect(() => {
    setCurrentTab("random");
  }, []);

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
        max={maxNumberOfJokes}
        value={numberOfRandomJokes}
        onChange={handleChange}
      />
    </>
  );
};

export default Random;
