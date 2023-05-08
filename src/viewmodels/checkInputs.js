export default function checkInputs(model) {
  if (!model.name || model.name.trim().length === 0) {
    alert("Debe introducir un nombre.");
    return;
  }
  
  if (model.totalHoras <= 0) {
    alert("El campo 'Total de horas' debe ser mayor que cero.");
    return;
  }

  if (!model.fechaInicio || isNaN(Date.parse(model.fechaInicio))) {
    alert("El campo 'Fecha de inicio' debe ser una fecha válida.");
    return;
  }

  if (Number(model.lunes) + Number(model.martes) + Number(model.miercoles) + Number(model.jueves) + Number(model.viernes) + Number(model.sabado) + Number(model.domingo) <= 0) {
    alert("Al menos uno de los campos de los días debe tener un valor mayor o igual a uno y no pueden estar vacíos o nulos.");
    return;
  }

  return true;
}