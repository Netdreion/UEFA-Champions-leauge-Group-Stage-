import { useState } from "react";
import data from "./data";
import Pots from "./conponents/Pots";
import GroupDraws from "./conponents/Groups";
import "./App.css";

function App() {
  const pot1Draw = () => {
    const pot1Draws = data.pot1(Math.floor(Math.random) * data.pot1.lenght);
  };
  return (
    <>
      <Pots />
      <GroupDraws pot1Draw={pot1Draw} />
    </>
  );
}

export default App;
