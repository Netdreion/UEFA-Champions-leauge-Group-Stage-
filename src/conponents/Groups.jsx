import React from "react";

const GroupDraws = ({ groups }) => {
  return (
    <div>
      <div>
        <h2>group A</h2>
        <ul>
          {groups.groupA.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group B</h2>
        <ul>
          {groups.groupB.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group C</h2>
        <ul>
          {groups.groupC.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group D</h2>
        <ul>
          {groups.groupD.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group E</h2>
        <ul>
          {groups.groupE.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group F</h2>
        <ul>
          {groups.groupF.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group G</h2>
        <ul>
          {groups.groupG.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>group H</h2>
        <ul>
          {groups.groupH.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupDraws;
