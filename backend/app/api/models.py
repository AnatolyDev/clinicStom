from sqlalchemy import event

from ..database import db, ma

class Doctor(db.Model):
    __tablename__ = 'doctor'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    photo = db.Column(db.String(50))

    def __str__(self):
        return self.name

class DoctorSchema(ma.Schema):
    class Meta:
        model = Doctor
        fields = ('id', 'name')