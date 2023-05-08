export default class ObjectiveModel {
    constructor() {
      this.name = '';
      this.description = '';
      this.lunes = 0;
      this.martes = 0;
      this.miercoles = 0;
      this.jueves = 0;
      this.viernes = 0;
      this.sabado = 0;
      this.domingo = 0;
      this.totalHoras = 0;
      this.fechaInicio = '';
      this.incidencias = [];
    }

    setNewObjective = (model) => {
      this.name = model.name;
      this.description = model.description;
      this.lunes = model.lunes;
      this.martes = model.martes;
      this.miercoles = model.miercoles;
      this.jueves = model.jueves;
      this.viernes = model.viernes;
      this.sabado = model.sabado;
      this.domingo = model.domingo;
      this.totalHoras = model.totalHoras;
      this.fechaInicio = model.fechaInicio;
      this.incidencias = model.incidencias;      
    };
  }
  