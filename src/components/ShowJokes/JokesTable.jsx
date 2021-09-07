import { useContext } from "react";

import Typography from "@material-ui/core/Typography";

import { JokeWebApiContext } from "./../../contexts/JokeWebApiContext";

const JokesTable = () => {
  const { jokes } = useContext(JokeWebApiContext);
  console.log("Jokes Table:", jokes);

  return <Typography>{JSON.stringify(jokes)}</Typography>;
};

export default JokesTable;
