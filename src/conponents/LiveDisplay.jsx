import React, { useEffect, useState } from "react";

const LiveDisplay = () => {
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    const fetchData = async (category) => {
      const url = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${category}`;

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData); // Store the fetched data in state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array to ensure the effect runs once

  // Render the fetched data or a loading message
  return (
    <div className="Container">
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
      <p>{category}</p>
    </div>
  );
};

export default LiveDisplay;
