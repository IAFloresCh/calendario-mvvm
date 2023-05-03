import React from "react";
import DayComponent from "./DayComponent";


function WeekComponent({ formData, setFormData, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            Total de Horas:
            <DayComponent type="number" />
            Fecha a Empezar:
            <DayComponent type="date" />
            <DayComponent day="Lunes" type="number" value={formData.lunes}
                onChange={(event) =>
                    setFormData({ ...formData, lunes: event.target.value })} />
            <DayComponent day="Martes" type="number"/>
            <DayComponent day="Miercoles" type="number"/>
            <DayComponent day="Jueves" type="number"/>
            <DayComponent day="Viernes" type="number"/>
            <DayComponent day="Sabado" type="number"/>
            <DayComponent day="Domingo" type="number"/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default WeekComponent;