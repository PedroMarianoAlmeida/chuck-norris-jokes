import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: "Black Ops One, Roboto",
  },
}));

const MyHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Box display="flex" justifyContent="center">
        <Toolbar>
          <Typography variant="h4" align="center" className={classes.logo}>
            Chuck Norris Jokes
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default MyHeader;
