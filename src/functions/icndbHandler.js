const categoryRoute = (categories) => {
  const routeByCategoryOptions = [
    { none: true, explicity: true, nerdy: true, route: "/random" },
    {
      none: true,
      explicity: true,
      nerdy: false,
      route: "/random?exclude=[nerdy]",
    },
    {
      none: true,
      explicity: false,
      nerdy: true,
      route: "/random?exclude=[explicit]",
    },
    {
      none: true,
      explicity: false,
      nerdy: false,
      route: "/random?exclude=[nerdy,explicit]",
    },
    {
      none: false,
      explicity: true,
      nerdy: true,
      route: "/random?limitTo=[nerdy,explicit] ",
    },
    {
      none: false,
      explicity: true,
      nerdy: false,
      route: "/random?limitTo=[explicit] ",
    },
    {
      none: false,
      explicity: false,
      nerdy: true,
      route: "/random?limitTo=[nerdy]",
    },
  ];

  const matchCategories = (options) => {
    return (
      options.none === categories.none &&
      options.explicity === categories.explicity &&
      options.nerdy === categories.nerdy
    );
  };

  const routeFiltered = routeByCategoryOptions.filter(matchCategories);
  console.log(routeFiltered[0].route);
  return routeFiltered[0].route;
};

const mainCharacterName = (firstName, lastName, currentComplement) => {
  if (firstName === "" && lastName === "") return "";
  let additionalParameters = currentComplement.includes("?") ? "&" : "?";

  if (firstName !== "") additionalParameters += `firstName=${firstName}`;
  if (firstName !== "" && lastName !== "") additionalParameters += "&";
  if (lastName !== "") additionalParameters += `lastName=${lastName}`;
  return additionalParameters;
};

const multipleIdJoke = (baseUrl, idArray, mainCharacterNameParameters) => {
  return idArray.map((id) =>
    fetch(`${baseUrl}/${id}${mainCharacterNameParameters}`)
  );
};

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

    case "categories":
      complementURL += categoryRoute(categories);
      break;

    case "id":
      if (jokeIds.length === 1) complementURL += `/${jokeIds[0]}`;
      break;
  }

  const mainCharacterNameParameters = mainCharacterName(
    firstName,
    lastName,
    complementURL
  );
  complementURL += mainCharacterNameParameters;

  if (currentTab === "id" && jokeIds.length > 1)
    return multipleIdJoke(baseURL, jokeIds, mainCharacterNameParameters);

  return [fetch(`${baseURL}${complementURL}`)];
};

export default icndbHandler;
