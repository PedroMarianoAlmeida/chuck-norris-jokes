import "./App.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import JokeFormMain from "./components/JokeForm/JokeFormMain";
import JokesTable from "./components/ShowJokes/JokesTable";
import JokeWebApiContextProvider from "./contexts/JokeWebApiContext";
import MyHeader from "./components/HeaderAndFooter/MyHeader";
import MyFooter from "./components/HeaderAndFooter/MyFooter";

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
      <MyFooter />
    </>
  );
}

export default App;
