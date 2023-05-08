import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ObjectiveModel from "../models/ObjectiveModel";

  
  function useDeleteObjectiveViewModel() {
    const [model, setModel] = useState(new ObjectiveModel());
    const params = useParams();
    const navigate = useNavigate();

    let path = window.location.pathname;
    path = path.slice(0, path.lastIndexOf('/'));
 
    const deleteViewModel = new ObjectiveModel(model);
  
    const urlBase = "http://127.0.0.1:8080/objectives";
  
    useEffect(() => {
      if (path === '/delete-objective' && params.id) {
        const getObjective = async () => {
          const response = await axios.delete(urlBase + "/" + params.id);
          setModel(response.data.objective);
          console.log("respuesta desde delete VM" + response.data.objective);
          navigate('/');
        };
        getObjective();
      }
    }, [params.id]); 
  

    return {
        model,
        deleteViewModel,
    };
  }
  
  export { useDeleteObjectiveViewModel };
  