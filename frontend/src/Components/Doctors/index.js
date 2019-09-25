import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import './style.css';
import { doctorAPI } from '../../api';
import Spinner from '../Spinner';

function Doctors() {

    const [loading, setLoading] = useState(false);
    const [doctorList, setDoctorList] = useState([]);

    useEffect(
        () => {
            console.log('Запрос списка врачей');
            setLoading(true);
            doctorAPI.getDoctors()
            .then(
                data => {
                    console.log(data)
                    setDoctorList(data.doctors)
                    setLoading(false);
                }
            )
        },
        []
    )

    return (
        <div className='cardContainer'>
            {loading && <Spinner />}
            {doctorList.map(doctor => (
                <div key={doctor.id} className='cardDiv'>
                    <DoctorCard id={doctor.id} name={doctor.name} photoPath={doctor.photo}/>
                </div>
                )
            )}
        </div>
        
    )
}

export default Doctors;