import React, { useState } from "react";
import Pots from "./conponents/Pots";
import GroupDraws from "./conponents/Groups";
import FormField from "./conponents/Form";
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

  const [formField, setFormField] = useState({
    name: "",
    star: "",
    goalKing: "",
    assistDemon: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({
      ...FormField,
      [name]: value,
    });
  };

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
  };

  return (
    <>
      <Pots drawTeams={drawTeams} />
      <GroupDraws groups={groups} />
      <FormField />
    </>
  );
}

export default App;
