import React, {useState, useEffect} from 'react';
import { doctorAPI } from '../../api';
import Spinner from '../Spinner';

const Doctor = (props) => {

    const [doctorInfo, setDoctorInfo] = useState(undefined);
    const [id, setId] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            setId(props.match.params.id);
            doctorAPI.getDoctorInfo(id)
            .then(
                doctor => {
                    setDoctorInfo(doctor);
                    setLoading(false);
                }
            )
        },
        []
    )

    return (
        <>
            {loading && < Spinner/>}
            {!loading &&
            <div>
                <h5>{doctorInfo.name}</h5>
                <img src={`/img/doctors/${id}.jpg`} alt='Картинка' />
                <p>{doctorInfo.about}</p>
            </div>}
        </>
    )
}

export default Doctor;