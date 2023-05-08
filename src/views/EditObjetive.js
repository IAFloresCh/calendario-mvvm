import React from "react";
import Inputs from "./Inputs";
import { useEditObjectiveViewModel } from "../viewmodels/EditObjectiveViewModel";



function EditObjective() {
  const { model, handleChange, handleSubmit,onAddBtnClick,onRemoveBtnClick,inputList,incidenciasList } = useEditObjectiveViewModel();
  const lt = ['Introduce tu nombre',"Introduce una descripción", "Introduce el total de horas", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Fecha de inicio"];

  

  return (
    <div>
      <h2>Edit Objective</h2>
      <form>
      <fieldset >
        <Inputs type="text" name={"name"} label={lt[0]} onChange={handleChange} value={model.name}/>
        <Inputs type="text" name={"description"} label={lt[1]} onChange={handleChange} value={model.description}/>
        <Inputs type="number" name={"totalHoras"} label={lt[2]}  onChange={handleChange} value={model.totalHoras}/>
        <Inputs type="number" name={"lunes"} label={lt[3]}  onChange={handleChange} value={model.lunes} />
        <Inputs type="number" name={"martes"} label={lt[4]}  onChange={handleChange} value={model.martes} />
        <Inputs type="number" name={"miercoles"} label={lt[5]}  onChange={handleChange} value={model.miercoles} />
        <Inputs type="number" name={"jueves"} label={lt[6]}  onChange={handleChange} value={model.jueves} />
        <Inputs type="number" name={"viernes"} label={lt[7]}  onChange={handleChange} value={model.viernes} />
        <Inputs type="number" name={"sabado"} label={lt[8]}  onChange={handleChange} value={model.sabado} />
        <Inputs type="number" name={"domingo"} label={lt[9]}  onChange={handleChange} value={model.domingo} />
        <Inputs type="date" name={"fechaInicio"} label={lt[10]}  onChange={handleChange} value={model.fechaInicio} />
        </fieldset>
        <fieldset >
        {incidenciasList}
          </fieldset>
        <label>Tienes pensado algun dia libre o alguna incidencia?</label>
        <button type="button" onClick={onAddBtnClick} >Añadir Incidencia</button>
        <button type="button" onClick={onRemoveBtnClick} >Eliminar Incidencia</button>
        <fieldset >
          {inputList}
        </fieldset>
        <button type="button" onClick={handleSubmit} >Guardar</button>
      </form>
    </div>
  );
}
export default EditObjective;
