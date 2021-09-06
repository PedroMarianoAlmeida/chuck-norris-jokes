import { createContext, useState, useEffect } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const initialNumberOfNumberJokes = 5;
  const [numberOfRandomJokes, setNumberOfNumberJokes] = useState(
    initialNumberOfNumberJokes
  );

  useEffect(() => {
    console.log(numberOfRandomJokes);
  }, [numberOfRandomJokes]);

  return (
    <JokeFormContext.Provider
      value={{
        initialNumberOfNumberJokes,
        numberOfRandomJokes,
        setNumberOfNumberJokes,
      }}
    >
      {props.children}
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
