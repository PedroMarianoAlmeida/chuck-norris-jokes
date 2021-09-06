import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import AllTabs from "./AllTabs";
import Random from "./Random";
import Categories from "./Categories";
import IdTab from "./IdTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 500,
    padding: theme.spacing(2),
  },
}));

export default function JokeFormMain() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paper}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Joke options">
          <Tab label="Random" {...a11yProps(0)} />
          <Tab label="Category" {...a11yProps(1)} />
          <Tab label="ID" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Random />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Categories />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IdTab />
      </TabPanel>

      <AllTabs />
    </Paper>
  );
}
