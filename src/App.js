import "./App.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import JokeFormMain from "./components/JokeForm/JokeFormMain";
import JokesTable from "./components/ShowJokes/JokesTable";
import JokeWebApiContextProvider from "./contexts/JokeWebApiContext";
import MyHeader from "./components/HeaderAndFooter/MyHeader";

function App() {
  return (
    <>
      <CssBaseline />
      <MyHeader />
      <Container>
        <JokeWebApiContextProvider>
          <JokeFormMain />
          <JokesTable />
        </JokeWebApiContextProvider>
      </Container>
    </>
  );
}

export default App;
