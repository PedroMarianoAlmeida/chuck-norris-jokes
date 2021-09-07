import "./App.css";

import JokeFormMain from "./components/JokeForm/JokeFormMain";
import JokesTable from "./components/ShowJokes/JokesTable";
import JokeWebApiContextProvider from "./contexts/JokeWebApiContext";

function App() {
  return (
    <div>
      <JokeWebApiContextProvider>
        <JokeFormMain />
        <JokesTable />
      </JokeWebApiContextProvider>
    </div>
  );
}

export default App;
