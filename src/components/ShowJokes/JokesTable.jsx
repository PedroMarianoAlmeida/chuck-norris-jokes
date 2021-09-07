import Typography from "@material-ui/core/Typography";

import useJokes from "../../hooks/useJokes";

const JokesTable = () => {
  const { jokes } = useJokes(); //Not updating after clicked in "GET MY JOKES button"
  console.log("Jokes Table:", jokes);

  return <Typography>Test</Typography>;
};

export default JokesTable;
