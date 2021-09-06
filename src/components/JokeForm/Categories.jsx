import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

const Categories = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <FormControlLabel
          control={<Checkbox color="primary" checked />}
          label="None"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked />}
          label="Explicit"
          checked
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked />}
          label="Nerdy"
        />
      </Box>
    </>
  );
};

export default Categories;
