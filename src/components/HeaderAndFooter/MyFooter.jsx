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
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
}));

const MyFooter = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.footer}>
      <Typography align="center">
        by{" "}
        <Link
          href="https://www.pedroprogrammer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.logo}
        >
          Pedro Programmer
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.icndb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.logo}
        >
          ICNDB
        </Link>
      </Typography>
    </AppBar>
  );
};

export default MyFooter;
