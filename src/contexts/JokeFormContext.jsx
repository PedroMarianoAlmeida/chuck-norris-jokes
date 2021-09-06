import { createContext, useState, useEffect } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const initialNumberOfNumberJokes = 5;
  const [numberOfRandomJokes, setNumberOfNumberJokes] = useState(
    initialNumberOfNumberJokes
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table([["Random jokes", numberOfRandomJokes]]);
  };

  return (
    <JokeFormContext.Provider
      value={{
        initialNumberOfNumberJokes,
        numberOfRandomJokes,
        setNumberOfNumberJokes,
        handleSubmit,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
