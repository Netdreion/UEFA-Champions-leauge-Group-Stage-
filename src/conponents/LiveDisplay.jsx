import React from "react";

const LiveDisPlay = () => {
  const fetchData = async () => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea";

    try {
      const responde = await fetch(url);
      const data = await responde.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    useEffect(() => {
      fetchData();
    }, []);
    return <div className="Container"></div>;
  };
};

export default LiveDisPlay;
