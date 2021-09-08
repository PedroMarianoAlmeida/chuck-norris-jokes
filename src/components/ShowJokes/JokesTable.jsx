import { useContext } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import { JokeWebApiContext } from "./../../contexts/JokeWebApiContext";

const JokeRow = ({ jokeData }) => {
  const { id, joke, categories } = jokeData;
  console.log(categories);
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{joke}</TableCell>
      <TableCell>
        {categories.length === 0 ? (
          <Chip label={"none"} />
        ) : (
          categories.map((category) => <Chip label={category} key={category} />)
        )}
      </TableCell>
    </TableRow>
  );
};

const JokesTable = () => {
  const { jokes } = useContext(JokeWebApiContext);

  const jokesTreated = (jokeParam) => {
    console.log("jokeParam", jokeParam);
    let jokeArrayTreated = [];
    if (jokes.length === 1) jokeArrayTreated = jokeParam[0].value;
    else
      jokeArrayTreated = jokeParam.map((jokeParamItem) => jokeParamItem.value);

    if (!Array.isArray(jokeArrayTreated)) jokeArrayTreated = [jokeArrayTreated]; //console.log("é array");
    return jokeArrayTreated;
  };
  return (
    <>
      {!!jokes.length && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Joke</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jokesTreated(jokes).map((joke) => (
                <JokeRow jokeData={joke} key={joke.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default JokesTable;
