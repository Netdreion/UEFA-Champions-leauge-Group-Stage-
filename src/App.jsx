import React, { useState } from "react";
import Pots from "./conponents/Pots";
import GroupDraws from "./conponents/Groups";
import data from "./data";
import "./App.css";

function App() {
  const [groups, setGroups] = useState({
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    groupE: [],
    groupF: [],
    groupG: [],
    groupH: [],
  });

  const drawTeams = () => {
    const pots = { ...data };

    for (const group in groups) {
      for (const pot in pots) {
        const randomIndex = Math.floor(Math.random() * pots[pot].length);
        const drawnTeam = pots[pot].splice(randomIndex, 1)[0];
        setGroups((prevGroups) => ({
          ...prevGroups,
          [group]: [...prevGroups[group], drawnTeam],
        }));
      }
    }
    setGroups([]);
  };

  return (
    <>
      <Pots drawTeams={drawTeams} />
      <GroupDraws groups={groups} />
    </>
  );
}

export default App;
