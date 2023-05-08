from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import uuid

app = Flask(__name__)
cors = CORS(app,)
app.config['CORS_HEADERS'] = 'Content-Type'

# Lista de usuarios en memoria
festivos = [
    {
        "id": "1",
        "date": "01-01",
        "name": "Año Nuevo",
    },
    {
        "id": "2",
        "date": "01-06",
        "name": "Día de los Reyes Magos",
    },
    {
        "id": "3",
        "date": "03-19",
        "name": "San José",
    },
    {
        "id": "4",
        "date": "04-17",
        "name": "Jueves Santo",
    },
    {
        "id": "5",
        "date": "04-18",
        "name": "Viernes Santo",
    },
    {
        "id": "6",
        "date": "04-20",
        "name": "Pascua",
    },
    {
        "id": "7",
        "date": "05-01",
        "name": "Día del trabajador",
    },
    {
        "id": "8",
        "date": "05-04",
        "name": "Día de la Madre",
    },
    {
        "id": "9",
        "date": "06-08",
        "name": "Pentecostés",
    },
    {
        "id": "10",
        "date": "07-250",
        "name": "Santiago Apostol",
    },
    {
        "id": "11",
        "date": "08-15",
        "name": "Asunción",
    },
    {
        "id": "12",
        "date": "10-12",
        "name": "Fiesta Nacional de España",
    },
    {
        "id": "13",
        "date": "10-13",
        "name": "Fiesta Nacional de España (día sustituto)",
    },
    {
        "id": "14",
        "date": "11-01",
        "name": "Todos los Santos",

    },
    {
        "id": "15",
        "date": "12-06",
        "name": "Día de la Constitución Española",
    },
    {
        "id": "16",
        "date": "12-08",
        "name": "La inmaculada concepción",
    },
    {
        "id": "17",
        "date": "12-25",
        "name": "Navidad",
    }
]
#Clase Festivo
class Festivo:
    def __init__(self, date, name):
        self.id = str(uuid.uuid4())
        self.date = date
        self.name = name

# Ruta para obtener todos los Festivos
@app.route('/festivos', methods=['GET'])
@cross_origin()
def get_festivos():
    return jsonify({'festivos': [festivo for festivo in festivos]})
# Ruta para obtener un Festivo específico
@app.route('/festivos/<string:id>', methods=['GET'])
@cross_origin()
def get_festivo(id):
    festivosFound = [festivo for festivo in festivos if festivo['id'] == id]
    if (len(festivosFound) > 0):
        return jsonify({'festivo': festivosFound[0]})
    return jsonify({'message': 'Festivo no encontrado'})

# Lista de objectives en memoria
objectives = []

#Clase Objective
class Objective:
    def __init__(self, name, description, lunes, martes, miercoles, jueves, viernes, sabado, domingo, totalHoras, fechaInicio, incidencias):
        self.id = str(uuid.uuid4())
        self.name = name
        self.description = description
        self.lunes = lunes
        self.martes = martes
        self.miercoles = miercoles
        self.jueves = jueves
        self.viernes = viernes
        self.sabado = sabado
        self.domingo = domingo
        self.totalHoras = totalHoras
        self.fechaInicio = fechaInicio
        self.incidencias = incidencias

# Ruta para crear un nuevo Objetivo
@app.route('/objectives', methods=['POST'])
@cross_origin()
def create_objective():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    lunes = data.get('lunes')
    martes = data.get('martes')
    miercoles = data.get('miercoles')
    jueves = data.get('jueves')
    viernes = data.get('viernes')
    sabado = data.get('sabado')
    domingo = data.get('domingo')
    totalHoras = data.get('totalHoras')
    fechaInicio = data.get('fechaInicio')
    incidencias = data.get('incidencias')
    objective = Objective(name, description, lunes, martes, miercoles, jueves, viernes, sabado, domingo, totalHoras, fechaInicio, incidencias)
    objectives.append(objective)
    return jsonify({'objective': objective.__dict__}), 201

# Ruta para obtener todos los Objetivos
@app.route('/objectives', methods=['GET'])
@cross_origin()
def get_objectives():
    return jsonify({'objectives': [objective.__dict__ for objective in objectives]})

# Ruta para obtener un Objetivo específico
@app.route('/objectives/<string:objective_id>', methods=['GET'])
@cross_origin()
def get_objective(objective_id):
    objective = next((objective for objective in objectives if objective.id == objective_id), None)
    if objective:
        return jsonify({'objective': objective.__dict__})
    return jsonify({'message': 'Objective not found'}), 404

# Ruta para actualizar un Objetivo específico
@app.route('/objectives/<string:objective_id>', methods=['PUT'])
@cross_origin()
def update_objective(objective_id):
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    lunes = data.get('lunes')
    martes = data.get('martes')
    miercoles = data.get('miercoles')
    jueves = data.get('jueves')
    viernes = data.get('viernes')
    sabado = data.get('sabado')
    domingo = data.get('domingo')
    totalHoras = data.get('totalHoras')
    fechaInicio = data.get('fechaInicio')
    incidencias = data.get('incidencias')  

    objective = next((objective for objective in objectives if objective.id == objective_id), None)
    if objective:
        objective.name = name or objective.name
        objective.description = description or objective.description
        objective.lunes = lunes or objective.lunes
        objective.martes = martes or objective.martes
        objective.miercoles = miercoles or objective.miercoles
        objective.jueves = jueves or objective.jueves
        objective.viernes = viernes or objective.viernes
        objective.sabado = sabado or objective.sabado
        objective.domingo = domingo or objective.domingo
        objective.totalHoras = totalHoras or objective.totalHoras
        objective.fechaInicio = fechaInicio or objective.fechaInicio
        objective.incidencias = incidencias or objective.incidencias
        return jsonify({'objective': objective.__dict__})
    return jsonify({'message': 'Objective not found'}), 404

# Ruta para eliminar un Objetivo específico
@app.route('/objectives/<string:objective_id>', methods=['DELETE'])
@cross_origin()
def delete_objective(objective_id):
    objective = next((objective for objective in objectives if objective.id == objective_id), None)
    if objective:
        objectives.remove(objective)
        return jsonify({'message': 'Objective deleted'})
    return jsonify({'message': 'Objective not found'}), 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
