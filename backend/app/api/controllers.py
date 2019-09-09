from flask import Blueprint, request, jsonify
from .models import Doctor, DoctorSchema, Reception, ReceptionSchema, db

module = Blueprint('api', __name__, url_prefix='/api')
doctor_schema = DoctorSchema()

@module.route('/doctors/', methods=['GET'])
def getDoctors():
    doctors = Doctor.query.all()
    docs_list = []
    for doc in doctors:
        docs_list.append(doctor_schema.dump(doc))
    return {'doctors' : docs_list}

@module.route('/adddoctor/', methods=['POST'])
def addDoctor():
    data = request.get_json()
    name = data['name']
    photo = data['photo']
    newDoctor = Doctor(name=name, photo=photo)
    db.session.add(newDoctor)
    db.session.commit()
    return {'result' : 'Add doctor with id={}'.format(newDoctor.id)}

@module.route('/deldoctor/', methods=['DELETE'])
def deleteDoctor():
    data = request.get_json()
    id = data['id']
    doctor = Doctor.query.filter_by(id=id).first()
    db.session.delete(doctor)
    db.session.commit()
    return {'result' : 'Doctor {0} was deleted'.format(doctor.name)}

# запись ко врачу
# добавить запись
@module.route('/reception/add/', methods=['POST'])
def addPriem():
    data = request.get_json()
    day = data['day']
    time = data['time']
    client = data['client']
    doctor_id = data['doctor_id']