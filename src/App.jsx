import { useState } from "react";
import data from "./data";
import Pots from "./conponents/Pots";
import GroupDraws from "./conponents/Groups";
import "./App.css";

function App() {
  const draw = () => {
    const pot1Draws = data.pot1(Math.floor(Math.random) * data.pot1.lenght);
  };
  return (
    <>
      <Pots />
      <GroupDraws />
    </>
  );
}

export default App;
