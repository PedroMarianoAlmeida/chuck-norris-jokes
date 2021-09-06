import { useState, useEffect } from "react";

const useErrorMessage = (currentTab, categories) => {
  const [errorMessage, setErrorMessage] = useState("");

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

  return [errorMessage, setErrorMessage];
};

export default useErrorMessage;
