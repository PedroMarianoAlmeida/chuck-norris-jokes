import { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const IdSelectedList = () => {
  const { jokeIds, setJokeIds } = useContext(JokeFormContext);
  const handleDelete = (e) => {
    const idToDelete = Number(e.currentTarget.parentNode.id);
    const temporaryJokesIds = [...jokeIds];
    const TemporaryJokesIdFiltered = temporaryJokesIds.filter(
      (id) => idToDelete !== id
    );
    setJokeIds(TemporaryJokesIdFiltered);
  };

  return (
    <Box display="flex" mb={2} flexWrap="wrap" alignItems="center">
      {!!jokeIds.length && (
        <>
          <Typography>IDs: </Typography>
          {jokeIds.map((id) => (
            <>
              <Box m={1}>
                <Chip label={id} onDelete={handleDelete} value={id} id={id} />
              </Box>
            </>
          ))}
        </>
      )}
    </Box>
  );
};

export default IdSelectedList;
