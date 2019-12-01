import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import { NavLink } from 'react-router-dom';

function DoctorCard({id, name, photoPath}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardImg src={'/img/doctors/'+photoPath} alt={name} />
            </CardBody>
            <CardBody>
                <NavLink to={`/doctors/${id}`}>Подробнее</NavLink>
            </CardBody>
        </Card>
    )
}

export default DoctorCard;