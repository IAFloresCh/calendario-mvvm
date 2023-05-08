import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ObjectiveModel from "../models/ObjectiveModel";
import Inputs from "../views/Inputs";

function useEditObjectiveViewModel() {
  const [model, setModel] = useState(
    new ObjectiveModel("", "", 0, 0, 0, 0, 0, 0, 0, 0, "",[])
  );
  const navigate = useNavigate();
  const params = useParams();
  const [inputList, setInputList] = useState([]);
  const [incidencias, setIncidencias] = useState([]);


  let path = window.location.pathname;
  path = path.slice(0, path.lastIndexOf("/"));

  const editViewModel = new ObjectiveModel(model);

  const urlBase = "http://127.0.0.1:8080/objectives";

  useEffect(() => {
    if (path === "/edit-objective" && params.id) {
      const getObjective = async () => {
        //const response = await axios.get(urlBase + "/" + params.id);
        //setModel(response.data.objective);
        //console.log("respuesta desde home VM" + response.data.objective);
        const objectives = localStorage.getItem("objectives") ? JSON.parse(localStorage.getItem("objectives")) : [] ;
        const objective = objectives.find((objective) => objective.id === params.id);
        setModel(objective);
        
      };
      getObjective();
    }
  }, [params.id, path]);

  const incidenciasList = Object.keys(model.incidencias).map((key, index) => {
    return <p key={index}>{key}: {model.incidencias[key]}</p>
  });

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <Inputs
          key={inputList.length}
          type="date"
          name={"incidencia" + inputList.length}
          label={"Incidencia " + inputList.length}
          onChange={handleIncidenciaChange}
          onlyread={true}
        />
      )
    );
  };
  

  const onRemoveBtnClick = () => {
    const newInputList = inputList.slice(0, inputList.length - 1);
    setInputList(newInputList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newModel = { ...model, [name]: value };
    setModel(newModel);
    editViewModel.setNewObjective(newModel);
  };

  const handleIncidenciaChange = (e) => {
    const { name, value } = e.target;
    const newIncidencia = { ...model.incidencias, [name]: value };
    const newModel = { ...model, incidencias: newIncidencia };
    setIncidencias(newIncidencia);
    setModel(newModel);
  };

  //handle submit post the data to the API using  axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    //const response = await axios.put(urlBase + "/" + model.id, model);
    //console.log(response);
    const objectives = localStorage.getItem("objectives") ? JSON.parse(localStorage.getItem("objectives")) : [] ;
    const objective = objectives.find((objective) => objective.id === model.id);
    const index = objectives.indexOf(objective);
    objectives.splice(index, 1, model);
    localStorage.setItem("objectives", JSON.stringify(objectives));
    
    navigate("/");
  };

  return {
    model,
    editViewModel,
    handleChange,
    handleSubmit,
    onAddBtnClick,
    onRemoveBtnClick,
    inputList,
    incidenciasList,
  };
}

export { useEditObjectiveViewModel };
