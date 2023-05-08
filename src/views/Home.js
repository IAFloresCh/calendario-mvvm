import React from "react";
import Objectives from "./Objectives";
import { useHomeViewModel } from "../viewmodels/HomeViewModel";

function Home() {
  const {date, models, fechasFinales} = useHomeViewModel();
  console.log("log desde Home.js");
  console.log(fechasFinales);

  return (
    <div>
      <h2>Home</h2>
      <h1>{date}</h1>
      <h2>Objectives</h2>
      <div className="cards-container">
        <Objectives models={models} fechasFinales={fechasFinales}/>
      </div>
    </div>
  );
}
export default Home;
