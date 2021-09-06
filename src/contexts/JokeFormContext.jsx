import { createContext, useState, useEffect } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const initialNumberOfNumberJokes = 5;
  const [numberOfRandomJokes, setNumberOfNumberJokes] = useState(
    initialNumberOfNumberJokes
  );

  const [currentTab, setCurrentTab] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table([
      ["Current tab", currentTab],
      ["Random jokes", numberOfRandomJokes],
    ]);
  };

  return (
    <JokeFormContext.Provider
      value={{
        initialNumberOfNumberJokes,
        numberOfRandomJokes,
        setNumberOfNumberJokes,
        handleSubmit,
        currentTab,
        setCurrentTab,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
