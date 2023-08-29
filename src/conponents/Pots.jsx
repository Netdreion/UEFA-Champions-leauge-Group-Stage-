import React from "react";
import data from "../data";

const Pots = () => {
  return (
    <div className="Container">
      <div className="Pot1">
        <h2>pot</h2>
        <ul>
          {data.pot1.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <div className="Pot2">
        <h2>pot2</h2>
        <ul>
          {data.pot2.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <div className="Pot1">
        <h2>pot3</h2>
        <ul>
          {data.pot3.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <div className="Pot4">
        <h2>pot4</h2>
        <ul>
          {data.pot4.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Pots;
