import { createContext, useState, useEffect } from "react";
import useErrorMessage from "./../hooks/useErrorMessage";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [jokeIds, setJokeIds] = useState([]);

  const [errorMessage, setErrorMessage] = useErrorMessage(
    currentTab,
    categories,
    jokeIds
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table([
      ["Current tab", currentTab],
      ["Random jokes", numberOfRandomJokes],
      [
        "Categories",
        `${categories.none} ${categories.explicity} ${categories.nerdy}`,
      ],
      ["Character Name", `${firstName} ${lastName}`],
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
        categories,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        jokeIds,
        setJokeIds,
        errorMessage,
      }}
    >
      <form onSubmit={handleSubmit}>{props.children}</form>
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
