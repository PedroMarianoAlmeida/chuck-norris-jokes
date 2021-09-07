import { useState, useEffect } from "react";

import icndbHandler from "./../functions/icndbHandler";

const useJokes = () => {
  const [startFetch, setStartFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [apiParameters, setApiParameters] = useState({});

  const getJokes = async () => {
    try {
      const res = await icndbHandler(apiParameters);
      if (res.ok) {
        const data = await res.json();
        setLoading(false);
        setError(false);
        setJokes(data.value);
        console.log(data.value);
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

  return [loading, error, jokes, setStartFetch, setApiParameters];
};

export default useJokes;
