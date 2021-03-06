import { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SportsMmaIcon from "@material-ui/icons/SportsMma";

import { JokeFormContext } from "./../../contexts/JokeFormContext";
import { JokeWebApiContext } from "../../contexts/JokeWebApiContext";

const AllTabs = () => {
  const { errorMessage, firstName, setFirstName, lastName, setLastName } =
    useContext(JokeFormContext);

  const { loading } = useContext(JokeWebApiContext);

  return (
    <>
      <Box pb={1}>
        <Divider />
      </Box>

      <Typography align="center">
        Would you dare put another name than Chuck Norris in the jokes?
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <Box pt={2} display="flex" justifyContent="center" flexDirection="column">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!!errorMessage || loading}
        >
          <SportsMmaIcon /> Get my JOKES! <SportsMmaIcon />
        </Button>
        <Box my={1}>
          <Typography align="center" color="error">
            {errorMessage}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AllTabs;
