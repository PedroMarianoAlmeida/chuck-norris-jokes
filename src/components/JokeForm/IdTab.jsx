import { useContext, useEffect, useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const IdTab = () => {
  const { jokeIds, setJokeIds, setCurrentTab } = useContext(JokeFormContext);

  const [currentId, setCurrentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const idErrorValidator = (id) => {
    const value = Number(id);

    if (!Number.isInteger(value)) return "Must be a valid number";
    if (value < 0 || value > 574) return "invalid ID";
    return "";
  };

  const handleChange = (e) => {
    const error = idErrorValidator(e.target.value);
    setErrorMessage(error);

    setCurrentId(e.target.value);
  };

  const handleClick = () => {
    const temporaryJokesIds = [...jokeIds];
    temporaryJokesIds.push(currentId);
    setJokeIds(temporaryJokesIds);
    setCurrentId("");
  };

  useEffect(() => {
    setCurrentTab("id");
  }, []);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="id number"
        variant="outlined"
        value={currentId}
        onChange={handleChange}
      />
      <Box ml={2} display="inline">
        <IconButton
          aria-label="add"
          color="primary"
          disabled={!!errorMessage}
          onClick={handleClick}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Typography color="error">{errorMessage}</Typography>
    </>
  );
};

export default IdTab;
