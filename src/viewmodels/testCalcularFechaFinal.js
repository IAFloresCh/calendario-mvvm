// Prueba 1: fecha final sin incidencias ni festivos
const model1 = {
    fechaInicio: "2023-05-07",
    lunes: 8,
    martes: 8,
    miercoles: 8,
    jueves: 8,
    viernes: 8,
    sabado: 0,
    domingo: 0,
    totalHoras: 40,
    incidencias: [],
  };
  console.log(model1);
  
  const fechaFinal1 = calcularFechaFinal(model1);
  console.log(fechaFinal1); 
  
  if (!(fechaFinal1 instanceof Date)) {
    console.error("La función debe retornar una instancia de Date");
  } else if (fechaFinal1 <= new Date(model1.fechaInicio)) {
    console.error("La fecha final debe ser posterior a la fecha de inicio");
  } else {
    console.log("Prueba 1 exitosa");
  }
  
  // Prueba 2: fecha final con incidencias y festivos
  const model2 = {
    fechaInicio: "2023-05-07",
    lunes: 8,
    martes: 8,
    miercoles: 8,
    jueves: 8,
    viernes: 8,
    sabado: 0,
    domingo: 0,
    totalHoras: 40,
    incidencias: ["2023-05-10", "2023-05-13"],
  };
  
  const festivos = [
    { date: "05-01" },
    { date: "05-25" },
    { date: "06-05" },
  ];
  
  localStorage.setItem("festivos", JSON.stringify(festivos));
  console.log(localStorage.getItem("festivos"));
  
  const fechaFinal2 = calcularFechaFinal(model2);
  
  if (!(fechaFinal2 instanceof Date)) {
    console.error("La función debe retornar una instancia de Date");
  } else if (fechaFinal2 <= new Date(model2.fechaInicio)) {
    console.error("La fecha final debe ser posterior a la fecha de inicio");
  } else {
    console.log("Prueba 2 exitosa");
  }
  

  function calcularFechaFinal(model) {
    const festivos = localStorage.getItem("festivos") ? JSON.parse(localStorage.getItem("festivos")) : []; 
    const incidencias = model.incidencias ? Object.values(model.incidencias) : [];
    console.log(incidencias); //incidencias (son fechas que no se trabajan pero aun asi suma dias para hacer el calculo)
    let fechaFinal = new Date(model.fechaInicio); //fecha final a calcular
    const fechaInicio = new Date(model.fechaInicio); //fecha inicio del objetivo
    const horasPorDia = [      Number(model.lunes),      Number(model.martes),      Number(model.miercoles),      Number(model.jueves),      Number(model.viernes),      Number(model.sabado),      Number(model.domingo),    ]; //datos de horas por dia
    const horasTotales = Number(model.totalHoras); //total de horas del objetivo
    console.log("horas totales" + horasTotales);
    //verificar si hay incidencias o festivos suman dias para el calculo
  
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
  