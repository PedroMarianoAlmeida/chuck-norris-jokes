import { createContext, useState, useEffect } from "react";
import useErrorMessage from "./../hooks/useErrorMessage";

import useJokes from "./../hooks/useJokes";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const initialNumberJokes = 5;
  const maxNumberOfJokes = 30;
  const [numberOfRandomJokes, setNumberOfNumberJokes] =
    useState(initialNumberJokes);

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

  const [loading, error, jokes, setStartFetch, setApiParameters] = useJokes();

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiParameters({
      currentTab,
      numberOfRandomJokes,
      categories,
      firstName,
      lastName,
      jokeIds,
    });

    setStartFetch(true);

    console.table([
      ["Current tab", currentTab],
      ["Random jokes", numberOfRandomJokes],
      [
        "Categories",
        `${categories.none} ${categories.explicity} ${categories.nerdy}`,
      ],
      ["Character Name", `${firstName} ${lastName}`],
      ["Joke IDs", JSON.stringify(jokeIds)],
    ]);
  };

  return (
    <JokeFormContext.Provider
      value={{
        initialNumberJokes,
        maxNumberOfJokes,
        numberOfRandomJokes,
        setNumberOfNumberJokes,
        handleSubmit,
        currentTab,
        setCurrentTab,
        categories,
        setCategories,
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
