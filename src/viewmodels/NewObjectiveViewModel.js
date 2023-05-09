import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Inputs from "../views/Inputs";
import ObjectiveModel from "../models/ObjectiveModel";
import checkInputs from "./checkInputs";

function useNewObjectiveViewModel() {
  const baseUrl = "http://localhost:8080/objectives";

  const [model, setModel] = useState(new ObjectiveModel());
  const navigate = useNavigate();
  const viewModel = new ObjectiveModel(model);
  const [inputList, setInputList] = useState([]);
  const [incidencias, setIncidencias] = useState([]);

  //add new input
  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <Inputs
          key={inputList.length}
          type="date"
          name={"incidencia" + inputList.length}
          label={"Incidencia " + inputList.length}
          onChange={handleIncidenciaChange}
        />
      )
    );
  };

  const onRemoveBtnClick = () => {
    const newInputList = inputList.slice(0, inputList.length - 1);
    setInputList(newInputList);
  };

  const handleIncidenciaChange = (e) => {
    const { name, value } = e.target;
    const newIncidencia = { ...model.incidencias, [name]: value };
    const newModel = { ...model, incidencias: newIncidencia };

    setIncidencias(newIncidencia);
    setModel(newModel);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newModel = { ...model, [name]: value };
    setModel(newModel);
    viewModel.setNewObjective(newModel);
    console.log(model.fechaInicio);
  };

  //handle submit post the data to the API using  axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(checkInputs(model)){
      //const response = await axios.post(baseUrl, model);
      //console.log(response);
      const uniqueID = Date.now().toString(36) + Math.random().toString(36).slice(2);//generar id unico, no seguro mejor usar libreria uuid
      model.id = uniqueID;
      //const response = await axios.post(baseUrl, model);
      const objectives = localStorage.getItem("objectives") ? JSON.parse(localStorage.getItem("objectives")) : [] ;
      objectives.push(model);
      localStorage.setItem("objectives", JSON.stringify(objectives));
          navigate("/");
    }


  };

  //check inputs before submit

  return {
    handleChange,
    handleSubmit,
    inputList,
    onAddBtnClick,
    onRemoveBtnClick,
    
    
  };
}

export { useNewObjectiveViewModel };
