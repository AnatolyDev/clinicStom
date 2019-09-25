import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import './style.css';
import { doctorAPI } from '../../api';

function Doctors() {

    const [doctorList, setDoctorList] = useState([]);

    useEffect(
        () => {
            console.log('Запрос списка врачей');
            doctorAPI.getDoctors()
            .then(
                data => {
                    console.log(data)
                    setDoctorList(data.doctors)
                }
            )
        },
        []
    )

    return (
        <div className='cardContainer'>
            {doctorList.map(doctor => (
                <div key={doctor.id} className='cardDiv'>
                    <DoctorCard name={doctor.name} photoPath={doctor.photo}/>
                </div>
                )
            )}
        </div>
        
    )
}

export default Doctors;