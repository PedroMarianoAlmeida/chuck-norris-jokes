const icndbHandler = (parametersData) => {
  const baseURL = "http://api.icndb.com/jokes";
  let complementURL = "";

  const {
    currentTab,
    numberOfRandomJokes,
    categories,
    jokeIds,
    firstName,
    lastName,
  } = parametersData;

  switch (currentTab) {
    case "random":
      complementURL += "/random";
      if (numberOfRandomJokes > 1) complementURL += `/${numberOfRandomJokes}`;
      break;
  }

  console.log(`${baseURL}${complementURL}`);
  return fetch(`${baseURL}${complementURL}`);
};

export default icndbHandler;
