import { Link } from "react-router-dom";

function Card({ model, final}) {
  console.log("final desde card" + final.toLocaleDateString());
  return (
    <div key={model.id} className="card">
      <h2>{model.name}</h2>
      <div className="card-content">
        <div className="card-row">
          <span>Lunes:</span>
          <span>{model.lunes}</span>
        </div>
        <div className="card-row">
          <span>Martes:</span>
          <span>{model.martes}</span>
        </div>
        <div className="card-row">
          <span>Miércoles:</span>
          <span>{model.miercoles}</span>
        </div>
        <div className="card-row">
          <span>Jueves:</span>
          <span>{model.jueves}</span>
        </div>
        <div className="card-row">
          <span>Viernes:</span>
          <span>{model.viernes}</span>
        </div>
        <div className="card-row">
          <span>Sábado:</span>
          <span>{model.sabado}</span>
        </div>
        <div className="card-row">
          <span>Domingo:</span>
          <span>{model.domingo}</span>
        </div>
        <div className="card-row">
          <span>Total de horas:</span>
          <span>{model.totalHoras}</span>
        </div>
        <div className="card-row">
          <span>Fecha de inicio:</span>
          <span>{model.fechaInicio}</span>
        </div>
        <div className="card-row">
          <span>Fecha de fin:</span>
          <span>{final.toLocaleDateString()}</span>
        </div>
        <Link to={"/" }>
          <button>Atras</button>
        </Link>
        <Link to={"/edit-objective/" + model.id}>
          <button>Editar</button>
        </Link>
        <Link to={"/delete-objective/" + model.id}>
          <button>Borrar</button>
        </Link>
      </div>
    </div>
  );
}export default Card;