import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MyHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Box display="flex" justifyContent="center">
        <Toolbar>
          <Typography variant="h4" align="center">
            Chuck Norris Jokes
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default MyHeader;
