import { useContext, useEffect, useState } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { JokeFormContext } from "./../../contexts/JokeFormContext";
import IdSelectedList from "./IdSelectedList";

const IdTab = () => {
  const { jokeIds, setJokeIds, setCurrentTab, maxNumberOfJokes } =
    useContext(JokeFormContext);

  const [currentId, setCurrentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const idErrorValidator = (id) => {
    if (!Number.isInteger(id)) return "Must be a valid number";
    if (id <= 0 || id > 574) return "invalid ID";
    if (jokeIds.indexOf(id) !== -1) return "ID already included";
    return "";
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    const error = idErrorValidator(value);
    setErrorMessage(error);

    setCurrentId(e.target.value);
  };

  const handleClick = () => {
    const temporaryJokesIds = [...jokeIds];
    temporaryJokesIds.push(Number(currentId));
    setJokeIds(temporaryJokesIds);
    setCurrentId("");
  };

  useEffect(() => {
    if (jokeIds.length >= maxNumberOfJokes)
      setErrorMessage("Max number of jokes");
  }, [jokeIds]);

  useEffect(() => {
    setCurrentTab("id");
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <IdSelectedList />
        <Box display="flex" justifyContent="center">
          <Box display="flex" flexDirection="column">
            <TextField
              id="outlined-basic"
              label="id number"
              variant="outlined"
              value={currentId}
              onChange={handleChange}
            />
            <Typography color="error" align="center">
              {errorMessage}
            </Typography>
          </Box>
          <Box ml={2} display="inline">
            <IconButton
              aria-label="add"
              color="primary"
              disabled={!!errorMessage || errorMessage !== ""}
              onClick={handleClick}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IdTab;
