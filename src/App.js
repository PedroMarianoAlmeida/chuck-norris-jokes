import "./App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useJokes from "./hooks/useJokes";
import JokeFormMain from "./components/JokeForm/JokeFormMain";

function App() {
  const [loading, error, jokes, setStartFetch] = useJokes();

  return (
    <div>
      <JokeFormMain />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setStartFetch(true)}
      >
        Call API
      </Button>
      <Typography>{JSON.stringify(jokes)}</Typography>
    </div>
  );
}

export default App;
