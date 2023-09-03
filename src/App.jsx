import { useState } from "react";
import data from "./data";
import Pots from "./conponents/Pots";
import GroupDraws from "./conponents/Groups";
import "./App.css";

function App() {
  const [group, setGroup] = useState({
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    groupE: [],
    groupF: [],
    groupG: [],
    groupH: [],
  });
  const [team, setTeam] = useState("");

  const handleClick = () => {
    const draw1 = data.pot1.map((team, index) =>
      team(Math.floor(Math.random) * data.pot1.length)
    );
    const randomTeam = data.pot1[draw1];
    setTeam(randomTeam);
  };

  return (
    <>
      <Pots />
      <GroupDraws handleClick={handleClick} group={group} />
    </>
  );
}

export default App;
