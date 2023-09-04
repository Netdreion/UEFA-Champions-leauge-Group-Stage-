import { useState } from "react";
import data from "../data";

const GroupDraws = ({ group }) => {
  return (
    <div>
      <div>
        <h2>group A</h2>
        <ul></ul>
      </div>
      <div>
        <h2>group B</h2>
        <ul>
          <li>{group}</li>
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
