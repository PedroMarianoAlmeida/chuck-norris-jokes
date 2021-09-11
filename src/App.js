import "./App.css";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

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
      <Box mb={10}>
        <Container>
          <JokeWebApiContextProvider>
            <JokeFormMain />
            <JokesTable />
          </JokeWebApiContextProvider>
        </Container>
      </Box>
      <MyFooter />
    </>
  );
}

export default App;
