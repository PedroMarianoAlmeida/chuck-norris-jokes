import "./App.css";
import Typography from "@material-ui/core/Typography";

import useJokes from "./hooks/useJokes";
import JokeFormMain from "./components/JokeForm/JokeFormMain";

function App() {
  const { loading, error, jokes, setStartFetch } = useJokes();

  return (
    <div>
      <JokeFormMain />
      <Typography>{JSON.stringify(jokes)}</Typography>
    </div>
  );
}

export default App;
