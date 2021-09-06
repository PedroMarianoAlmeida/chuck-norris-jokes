import { useContext, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const IdTab = () => {
  const { jokeIds, setJokeIds, setCurrentTab } = useContext(JokeFormContext);

  useEffect(() => {
    setCurrentTab("id");
  }, []);

  return (
    <>
      <TextField id="outlined-basic" label="id number" variant="outlined" />
      <IconButton aria-label="add" color="primary">
        <AddIcon />
      </IconButton>
    </>
  );
};

export default IdTab;
