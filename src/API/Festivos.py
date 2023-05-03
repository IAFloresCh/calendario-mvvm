from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import uuid

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Lista de usuarios en memoria
festivos = [
    {
        "id": "1",
        "date": "2025-01-01 00:00:00",
        "name": "Año Nuevo",
    },
    {
        "id": "2",
        "date": "2025-01-06 00:00:00",
        "name": "Día de los Reyes Magos",
    },
    {
        "id": "3",
        "date": "2025-03-19 00:00:00",
        "name": "San José",
    },
    {
        "id": "4",
        "date": "2025-04-17 00:00:00",
        "name": "Jueves Santo",
    },
    {
        "id": "5",
        "date": "2025-04-18 00:00:00",
        "name": "Viernes Santo",
    },
    {
        "id": "6",
        "date": "2025-04-20 00:00:00",
        "name": "Pascua",
    },
    {
        "id": "7",
        "date": "2025-05-01 00:00:00",
        "name": "Día del trabajador",
    },
    {
        "id": "8",
        "date": "2025-05-04 00:00:00",
        "name": "Día de la Madre",
    },
    {
        "id": "9",
        "date": "2025-06-08 00:00:00",
        "name": "Pentecostés",
    },
    {
        "id": "10",
        "date": "2025-07-25 00:00:00",
        "name": "Santiago Apostol",
    },
    {
        "id": "11",
        "date": "2025-08-15 00:00:00",
        "name": "Asunción",
    },
    {
        "id": "12",
        "date": "2025-10-12 00:00:00",
        "name": "Fiesta Nacional de España",
    },
    {
        "id": "13",
        "date": "2025-10-13 00:00:00",
        "name": "Fiesta Nacional de España (día sustituto)",
    },
    {
        "id": "14",
        "date": "2025-11-01 00:00:00",
        "name": "Todos los Santos",

    },
    {
        "id": "15",
        "date": "2025-12-06 00:00:00",
        "name": "Día de la Constitución Española",
    },
    {
        "id": "16",
        "date": "2025-12-08 00:00:00",
        "name": "La inmaculada concepción",
    },
    {
        "id": "17",
        "date": "2025-12-25 00:00:00",
        "name": "Navidad",
    }
]
#Clase Festivo
class Festivo:
    def __init__(self, date, name):
        self.id = str(uuid.uuid4())
        self.date = date
        self.name = name
        self.rule = rule
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



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
