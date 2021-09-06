import { createContext, useState, useEffect } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const initialNumberOfNumberJokes = 5;
  const [numberOfRandomJokes, setNumberOfNumberJokes] = useState(
    initialNumberOfNumberJokes
  );

  const [errorMessage, setErrorMessage] = useState("");

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

  useEffect(() => {
    setErrorMessage("");
  }, [currentTab]);

  useEffect(() => {
    const emptyCategory = () =>
      categories.none === false &&
      categories.explicity === false &&
      categories.nerdy === false;

    if (currentTab === "categories" && emptyCategory()) {
      setErrorMessage("Some category must be selected");
    }
    if (currentTab === "categories" && !emptyCategory()) {
      setErrorMessage("");
    }
  }, [currentTab, categories]);

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
        categories,
        errorMessage,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
