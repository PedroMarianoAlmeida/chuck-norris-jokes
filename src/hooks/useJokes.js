import { useState, useEffect } from "react";

import icndbHandler from "./../functions/icndbHandler";

const useJokes = () => {
  const [startFetch, setStartFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [apiParameters, setApiParameters] = useState({});

  console.log("useJokes:", jokes);
  const getJokes = async () => {
    try {
      const res = await Promise.all(icndbHandler(apiParameters));

      if (res.every((individualRes) => individualRes.ok)) {
        const data = await Promise.all(res.map((data) => data.json()));
        setLoading(false);
        setError(false);
        setJokes(data);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (startFetch === true) {
      setLoading(true);
      setStartFetch(false);

      getJokes();
    }
  }, [startFetch]);

  return { loading, error, jokes, setStartFetch, setApiParameters };
};

export default useJokes;
