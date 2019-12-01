import React, {useState, useEffect} from 'react';
import { doctorAPI } from '../../api';
import Spinner from '../Spinner';

const Doctor = (props) => {

    const [doctorInfo, setDoctorInfo] = useState(undefined);
    const [id, setId] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            async function getDoctorInfo() {
                setId(props.match.params.id);
                const doctor = await doctorAPI.getDoctorInfo(id);
                setDoctorInfo(doctor);
                setLoading(false);
            }
            getDoctorInfo();
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