import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data Fetched from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
