import { useState, useEffect } from "react";

const useJokes = () => {
  const [startFetch, setStartFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    try {
      const res = await fetch("http://api.icndb.com/categories");
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

  return [loading, error, jokes, setStartFetch];
};

export default useJokes;
