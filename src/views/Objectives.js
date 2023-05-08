import CardLite from "./CardLite";
function Objectives({ models, fechasFinales}) {
  console.log("log desde Objectives.js");
  console.log(models);
  console.log(fechasFinales);
  return (
    <div className="cards-container">
      {models.map((model, index) => (
        <div key={model.id}>
        <CardLite model={model} fechaFinal={fechasFinales[index]} />
        </div>
      ))}
    </div>
  );
}

export default Objectives;


/*

import CardLite from "./CardLite";

function Objectives({ models, fechasFinales }) {
  console.log("log desde Objectives.js");
  console.log(fechasFinales);
  return (
    <div className="cards-container">
      {models.map((model, index) => (
        <div key={model.id}>
          <CardLite model={model} fechaFinal={fechasFinales[index]} />
        </div>
      ))}
    </div>
  );
}

export default Objectives;

*/