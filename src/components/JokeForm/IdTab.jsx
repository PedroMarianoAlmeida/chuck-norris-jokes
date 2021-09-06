import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const IdTab = () => {
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
