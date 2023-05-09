import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ObjectiveModel from "../models/ObjectiveModel";
import calcularFechaFinal from "./calcularFechaFinal";
import calcularPercentage from "./calcularPercentage";

function useHomeViewModel() {
  const [date, setDate] = useState("");

  const [models, setModels] = useState([]);
  const [model, setModel] = useState(new ObjectiveModel());
  const homeViewModel = new ObjectiveModel(model);

  const urlBaseFestivos = "http://127.0.0.1:8080/festivos";
  const urlBaseObjectives = "http://127.0.0.1:8080/objectives";
  //const urlBase = 'https://api.generadordni.es/v2/holidays/holidays?country=ES&year=';
  //const thisYear = new Date().getFullYear();
  const [festivos, setFestivos] = useState([]);
  const [fechasFinales, setFechasFinales] = useState([]);
  const [porcentajes, setPorcentajes] = useState([]);

  // useEffect to get a current date
  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString());
  }, [date]);

  // get data festivos from API using axios
  useEffect(() => {
    const getFestivos = async () => {
      const response = await axios.get(urlBaseFestivos /*+ thisYear*/);
      setFestivos(JSON.stringify(response.data.festivos));
      localStorage.setItem("festivos", JSON.stringify(response.data.festivos));
      console.log(response.data.festivos);
    };
    getFestivos();
  }, []);

  // get data objectives from API using axios
  useEffect(() => {
    const getObjectives = async () => {
      //const response = await axios.get(urlBaseObjectives);
      //setModels(response.data.objectives);
      //console.log(response.data.objectives);
      const objectives = localStorage.getItem("objectives") ? JSON.parse(localStorage.getItem("objectives")) : [] ;
      setModels(objectives);
    };
    getObjectives();
  }, []);

  //iterar calcularFechaFinal() para cada objetivo

  useEffect(() => {
    const fechasFinales = models.map((model) => {
      return calcularFechaFinal(model);
    });
    setFechasFinales(fechasFinales);
  }, [models]);

  useEffect(() => {

    setModels(prevModels => prevModels.map(model =>({ ...model, percentage: calcularPercentage(model)})));

  }, []);


  useEffect(() => {
    console.log("finales" + JSON.stringify(fechasFinales));
  }, [fechasFinales]);

  

  return {
    date,
    models,
    festivos,
    homeViewModel,
    fechasFinales,
    porcentajes,
  };
}

export { useHomeViewModel };
