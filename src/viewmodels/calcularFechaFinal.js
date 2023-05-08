export default function calcularFechaFinal(model) {
  const festivos = localStorage.getItem("festivos") ? JSON.parse(localStorage.getItem("festivos")) : []; 
  const incidencias = model.incidencias ? Object.values(model.incidencias) : [];
  let fechaFinal = new Date(model.fechaInicio); //fecha final a calcular
  const fechaInicio = new Date(model.fechaInicio); //fecha inicio del objetivo
  const horasPorDia = [      Number(model.lunes),      Number(model.martes),      Number(model.miercoles),      Number(model.jueves),      Number(model.viernes),      Number(model.sabado),      Number(model.domingo),    ]; //datos de horas por dia
  const horasTotales = Number(model.totalHoras); //total de horas del objetivo
  console.log("horas totales" + horasTotales);

  let diasTrabajados = 0;
  let horasAcumuladas = 0;

  while (horasAcumuladas < horasTotales) {
    const diaDeLaSemana = fechaFinal.getDay();

    if (horasPorDia[diaDeLaSemana] > 0) {
      diasTrabajados++;
    }

    horasAcumuladas += horasPorDia[diaDeLaSemana];
    fechaFinal.setDate(fechaFinal.getDate() + 1);

    const fechaActualString =
      fechaFinal.getFullYear() +
      "-" +
      ("0" + (fechaFinal.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + fechaFinal.getDate()).slice(-2);

    if (festivos.some((festivo) => festivo.date === fechaActualString)) {
      fechaFinal.setDate(fechaFinal.getDate() + 1);
    }

    if (incidencias.some((incidencia) => incidencia === fechaActualString)) {
      diasTrabajados++;
      fechaFinal.setDate(fechaFinal.getDate() + 1);
    }
  }
  console.log("dias trabajados" + diasTrabajados);
  console.log("horas acumuladas" + horasAcumuladas);
  console.log("fecha final" + fechaFinal);

  return fechaFinal;

}
