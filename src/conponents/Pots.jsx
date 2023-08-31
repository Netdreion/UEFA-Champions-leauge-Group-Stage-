import React from "react";
import data from "../data";

const Pots = () => {
  const handleDaw = (team) => {
    team(Math.floor(Math.random) * data.pot1.length);
  };
  return (
    <div className="Container">
      <div className="Pot">
        <h2>Pot 1</h2>
        <ul>
          {data.pot1.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <button onClick={handleDaw}>DRAW</button>
      <div className="Pot">
        <h2>Pot 2</h2>
        <ul>
          {data.pot2.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <button>DRAW</button>
      <div className="Pot">
        <h2>Pot 3</h2>
        <ul>
          {data.pot3.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <button>DRAW</button>
      <div className="Pot">
        <h2>Pot 4</h2>
        <ul>
          {data.pot4.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <button>DRAW</button>
    </div>
  );
};

export default Pots;
