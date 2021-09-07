const icndbHandler = (parametersData) => {
  console.log(parametersData);
  return fetch("http://api.icndb.com/jokes/count");
};

export default icndbHandler;
