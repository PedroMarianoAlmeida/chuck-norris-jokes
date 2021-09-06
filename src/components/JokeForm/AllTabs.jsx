import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SportsMmaIcon from "@material-ui/icons/SportsMma";

const AllTabs = () => {
  return (
    <>
      <Box pb={1}>
        <Divider />
      </Box>

      <Typography align="center">Number of jokes</Typography>
      <Slider
        defaultValue={1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
      />

      <Typography align="center">
        Would you dare put another name than Chuck Norris in the jokes?
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <TextField id="standard-basic" label="First Name" />
        <TextField id="standard-basic" label="Last Name" />
      </Box>
      <Box pt={2} display="flex" justifyContent="center">
        <Button variant="contained" color="primary">
          <SportsMmaIcon /> Get my JOKES! <SportsMmaIcon />
        </Button>
      </Box>
    </>
  );
};

export default AllTabs;
