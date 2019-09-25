import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function DoctorCard({name, photoPath}) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardImg src={"/img/doctors/"+photoPath} alt={name} />
            </CardBody>
        </Card>
    )
}

export default DoctorCard;