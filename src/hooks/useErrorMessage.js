import { useState, useEffect } from "react";

const useErrorMessage = (currentTab, categories, jokeIds) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [currentTab]);

  useEffect(() => {
    const emptyCategory = () =>
      categories.none === false &&
      categories.explicity === false &&
      categories.nerdy === false;

    if (currentTab === "categories") {
      if (emptyCategory()) setErrorMessage("Some category must be selected");
      else setErrorMessage("");
    }
  }, [currentTab, categories]);

  useEffect(() => {
    if (currentTab === "id") {
      if (jokeIds.length === 0) setErrorMessage("Must be at least one id");
      else setErrorMessage("");
    }
  }, [currentTab, jokeIds]);

  return [errorMessage, setErrorMessage];
};

export default useErrorMessage;
