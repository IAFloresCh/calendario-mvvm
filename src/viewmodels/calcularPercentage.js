export default function calcularPercentage(model) {

    //calcular porcentaje
    const fechaInicio = new Date(model.fechaInicio);
    const fechaActual = new Date();
    const horasTotales = Number(model.totalHoras);


    const horasTranscurridas = (fechaActual - fechaInicio) / 3600000;
    console.log("HORAS TRANSCURRIDAS" + horasTranscurridas);

    const porcentaje = (horasTranscurridas * 100) / horasTotales;
    const formatedPorcentaje = porcentaje.toFixed(2);
    console.log("porcentaje" + formatedPorcentaje);

    
    return formatedPorcentaje;
};