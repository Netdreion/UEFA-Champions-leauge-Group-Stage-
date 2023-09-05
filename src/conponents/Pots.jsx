import React from "react";
import data from "../data";

const Pots = ({ drawTeams }) => {
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

      <div className="Pot">
        <h2>Pot 2</h2>
        <ul>
          {data.pot2.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>

      <div className="Pot">
        <h2>Pot 3</h2>
        <ul>
          {data.pot3.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>

      <div className="Pot">
        <h2>Pot 4</h2>
        <ul>
          {data.pot4.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <button
        onClick={drawTeams}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Draw
      </button>
    </div>
  );
};

export default Pots;
