import { createContext, useState, useEffect } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const initialNumberOfNumberJokes = 5;
  const [numberOfRandomJokes, setNumberOfNumberJokes] = useState(
    initialNumberOfNumberJokes
  );

  const [categories, setCategories] = useState({
    none: true,
    explicity: true,
    nerdy: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table([
      ["Current tab", currentTab],
      ["Random jokes", numberOfRandomJokes],
      [
        "Categories",
        `${categories.none} ${categories.explicity} ${categories.nerdy}`,
      ],
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
        categories,
        setCategories,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
