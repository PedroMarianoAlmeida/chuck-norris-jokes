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
      console.log(categories);
      complementURL += categoryRoute(categories);
      break;
  }

  console.log(`${baseURL}${complementURL}`);
  return fetch(`${baseURL}${complementURL}`);
};

export default icndbHandler;
