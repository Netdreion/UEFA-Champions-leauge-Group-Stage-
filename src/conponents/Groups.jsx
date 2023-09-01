import { useState } from "react";
import data from "../data";

const GroupDraws = ({ pot1Draw }) => {
  return (
    <div>
      <button onClick={pot1Draw}></button>
      <div>
        <h2>group A</h2>
        <ul>
          {pot1Draw.map((team, index) => {
            return <li key={index}>{team}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>group B</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h2>group C</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h2>group D</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default GroupDraws;
