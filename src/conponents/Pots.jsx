import React from "react";
import data from "../data";

const Pots = () => {
  return (
    <div className="Container">
      <div>
        <h2>pot</h2>
        <ul>
          {data.pot1.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Pots;
