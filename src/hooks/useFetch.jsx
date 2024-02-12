import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); //https://dummyjson.com/docs
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.massage);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return {data,loading,error};
};
