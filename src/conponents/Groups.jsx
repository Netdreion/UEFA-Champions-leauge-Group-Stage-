import React from "react";

const GroupDraws = ({ groups }) => {
  return (
    <div className="group-draws-container">
      <div className="group">
        <h2 className="group-title">group A</h2>
        <ul className="team-list">
          {groups.groupA.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group B</h2>
        <ul className="team-list">
          {groups.groupB.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group C</h2>
        <ul className="team-list">
          {groups.groupC.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group D</h2>
        <ul className="team-list">
          {groups.groupD.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group E</h2>
        <ul className="team-list">
          {groups.groupE.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group F</h2>
        <ul className="team-list">
          {groups.groupF.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group G</h2>
        <ul className="team-list">
          {groups.groupG.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
      <div className="group">
        <h2 className="group-title">group H</h2>
        <ul className="team-list">
          {groups.groupH.map((team, index) => (
            <li key={index} className="team">
              {team}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupDraws;
