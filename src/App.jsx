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
  });
  const [team, setTeam] = useState("");

  return (
    <>
      <Pots />
      <GroupDraws />
    </>
  );
}

export default App;
