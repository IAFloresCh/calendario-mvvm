import { Link } from "react-router-dom";

function CardLite({ model, fechaFinal}) {
  console.log("LOG DESDE card lite");
  console.log(model);
  console.log(fechaFinal);

  return (
    <div key={model.id} className="card">
      <h2>{model.name}</h2>
      <div className="card-content">
      <div className="card-row">
          <span>Descripción:</span>
          <span>{model.description}</span>
        </div>
        <div className="card-row">
          <span>Termina:</span>
          <span>{fechaFinal ? fechaFinal.toLocaleDateString() : 'ERROR'}</span>
        </div>
        <Link to={"/show-objective/" + model.id}>
          <button>Ver mas</button>
        </Link>
      </div>
    </div>
  );
}export default CardLite;