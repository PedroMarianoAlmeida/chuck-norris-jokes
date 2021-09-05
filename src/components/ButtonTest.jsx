import Button from "@material-ui/core/Button";
import useJokes from "../hooks/useJokes";

const ButtonTest = () => {
  const [loading, error, jokes, setStartFetch] = useJokes();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setStartFetch(true)}
    >
      Call API
    </Button>
  );
};

export default ButtonTest;
