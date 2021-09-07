import "./App.css";

import JokeFormMain from "./components/JokeForm/JokeFormMain";
import JokesTable from "./components/ShowJokes/JokesTable";

function App() {
  return (
    <div>
      <JokeFormMain />
      <JokesTable />
    </div>
  );
}

export default App;
