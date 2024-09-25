import React, { useState, useEffect } from "react";

const fetchData = (url) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setError(null);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchDataAsync();
  }, []);

  return { users };
};

export default fetchData;
