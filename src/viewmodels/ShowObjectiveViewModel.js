import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ObjectiveModel from "../models/ObjectiveModel";
import calcularFechaFinal from "./calcularFechaFinal";
import calcularPercentage from "./calcularPercentage";

function useShowObjectiveViewModel() {
  const [model, setModel] = useState(new ObjectiveModel());
  const params = useParams();
  const [final, setFinal] = useState(new Date());
  const [percentage, setPercentage] = useState(0);



  let path = window.location.pathname;
  path = path.slice(0, path.lastIndexOf("/"));

  const showViewModel = new ObjectiveModel(model);

  const urlBase = "http://127.0.0.1:8080/objectives";

  useEffect(() => {
    if (path === "/show-objective" && params.id) {
      const getObjective = async () => {
        //const response = await axios.get(urlBase + "/" + params.id);
        //setModel(response.data.objective);
        //console.log("respuesta desde show VM" + response.data.objective);
        const objectives = localStorage.getItem("objectives") ? JSON.parse(localStorage.getItem("objectives")) : [] ;
        const objective = objectives.find((objective) => objective.id === params.id);
        setModel(objective);
      };
      getObjective();
    }
  }, [params.id, path]);

  //calcular fecha final
  useEffect(() => {
    const fechaFinal = calcularFechaFinal(model);
    setFinal(fechaFinal);
    const porcentaje = calcularPercentage(model, final);
    setPercentage(porcentaje);
  }, [model]);

  useEffect(() => {
    console.log("final" + final);
  }, [final]);
  

  return {
    model,
    showViewModel,
    final,
    percentage,
  };
}

export { useShowObjectiveViewModel };
