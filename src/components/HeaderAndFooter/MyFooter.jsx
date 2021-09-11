import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
    padding: `${theme.spacing(1)}px 0`,
  },

  logo: {
    color: "white",
  },
}));

const MyFooter = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Typography variant="h6" align="center">
        by{" "}
        <Link
          href="https://www.pedroprogrammer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.logo}
        >
          Pedro Programmer
        </Link>
      </Typography>
    </AppBar>
  );
};

export default MyFooter;
