import { useState, useEffect } from "react";

const useJokes = () => {
  const [startFetch, setStartFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    if (startFetch === true) {
      console.log("fetch started");
      setStartFetch(false);
    }
  }, [startFetch]);

  return [loading, error, jokes, setStartFetch];
};

export default useJokes;
