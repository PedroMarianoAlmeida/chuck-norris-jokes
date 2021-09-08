import { useContext } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

import { JokeWebApiContext } from "./../../contexts/JokeWebApiContext";

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
});

const LoadingPlaceholder = () => (
  <TableRow>
    <TableCell>
      <Skeleton variant="rect" width={"400"} height={50} />
    </TableCell>
    <TableCell>
      <Skeleton variant="rect" width={"400"} height={50} />
    </TableCell>
    <TableCell>
      <Skeleton variant="rect" width={"400"} height={50} />
    </TableCell>
  </TableRow>
);

const JokeRow = ({ jokeData }) => {
  const { id, joke, categories } = jokeData;

  return (
    <TableRow>
      <TableCell align="center">{id}</TableCell>
      <TableCell>{joke}</TableCell>
      <TableCell align="center">
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
  const { jokes, loading } = useContext(JokeWebApiContext);
  const classes = useStyles();

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
      {(!!jokes.length || loading) && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={classes.bold}>
                  id
                </TableCell>
                <TableCell align="center" className={classes.bold}>
                  Joke
                </TableCell>
                <TableCell align="center" className={classes.bold}>
                  Category
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <LoadingPlaceholder />
              ) : (
                jokesTreated(jokes).map((joke) => (
                  <JokeRow jokeData={joke} key={joke.id} />
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default JokesTable;
