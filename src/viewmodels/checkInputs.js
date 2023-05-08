export default function checkInputs(model) {
  if (!model.name || model.name.trim().length === 0) {
    alert("Debe introducir un nombre.");
    return;
  } else if (model.totalHoras <= 0) {
    alert("El campo 'Total de horas' debe ser mayor que cero.");
    return;
  }

  // Verificar si el campo "fechaInicio" es una fecha válida
  else if (!model.fechaInicio) {
    alert("El campo 'Fecha de inicio' es obligatorio.");
    return;
  }

  // Verificar que los dias tengan al menos uno el valor de 1 los demas pueden ser 0
  else if (
    (model.lunes !== undefined &&
      model.lunes !== null &&
      model.lunes !== "" &&
      model.lunes < 1) ||
    (model.martes !== undefined &&
      model.martes !== null &&
      model.martes !== "" &&
      model.martes < 1) ||
    (model.miercoles !== undefined &&
      model.miercoles !== null &&
      model.miercoles !== "" &&
      model.miercoles < 1) ||
    (model.jueves !== undefined &&
      model.jueves !== null &&
      model.jueves !== "" &&
      model.jueves < 1) ||
    (model.viernes !== undefined &&
      model.viernes !== null &&
      model.viernes !== "" &&
      model.viernes < 1) ||
    (model.sabado !== undefined &&
      model.sabado !== null &&
      model.sabado !== "" &&
      model.sabado < 1) ||
    (model.domingo !== undefined &&
      model.domingo !== null &&
      model.domingo !== "" &&
      model.domingo < 1)
  ) {
    alert(
      "Al menos uno de los campos de los días debe tener un valor mayor o igual a uno y no pueden estar vacíos o nulos."
    );
    return;
  }
}
