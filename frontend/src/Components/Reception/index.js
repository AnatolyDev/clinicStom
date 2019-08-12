import React, { useState } from 'react';
import { Container, Row, Col,
    Input,
    Button, ButtonGroup } from 'reactstrap';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
const WEEKDAYS_LONG = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const DOCTORS = [
    {
        id : 1,
        name : 'Иванов Пётр Степанович'
    },
    {
        id : 2,
        name : 'Селиванова Нина Евгеньевна'
    },
    {
        id : 3,
        name : 'Коровина Дина Петровна'
    },
    {
        id : 4,
        name : 'Нафикова Рузалья Асхатовна'
    }
]

function Reception() {

    const [doctor, setDoctor] = useState(0);
    const [selectedDay, setDay] = useState(undefined);
    const [selectedTime, setTime] = useState(undefined);

    function handleDoctorChange(e) {
        setDoctor(e.target.value);
        setDay(undefined);
        setTime(undefined);
    }

    function handleDayClick(day) {
        setDay(day);
        setTime(undefined);
    }

    function handleTimeSelect(rSelected) {
        setTime(rSelected);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Онлайн-запись к врачу</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    Шаг 1 : Выберите врача
                </Col>
                <Col>
                    <Input type="select" name="selectDoctor" value={doctor} onChange={handleDoctorChange}>
                        <option key={0} value={0} disabled>
                            Выберите врача...
                        </option>
                        {DOCTORS.map(
                            doctor => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </option>
                            )
                        )}
                    </Input>
                </Col>
            </Row>
            {doctor>0 &&
            <Row>
                <Col>
                    Выберите дату
                </Col>
                <Col>
                    <div>
                        <DayPicker
                            locale="ru"
                            months={MONTHS}
                            weekdaysLong={WEEKDAYS_LONG}
                            weekdaysShort={WEEKDAYS_SHORT}
                            firstDayOfWeek={1}
                            onDayClick={handleDayClick}
                            selectedDays={selectedDay}
                        />
                    </div>
                </Col>
            </Row>}
            {selectedDay &&
            <Row>
                <Col>
                    Выберите время
                </Col>
                <Col>
                    <ButtonGroup>
                        {[8,9,10,11,12,13].map(
                            t => ( 
                                <Button
                                    outline
                                    disabled={8 === t}
                                    color="primary"
                                    onClick={() => handleTimeSelect(t)}
                                    active={selectedTime === t}
                                    >
                                    {t}
                                </Button>
                            )
                        )}
                    </ButtonGroup>
                </Col>
            </Row>}
            {selectedTime &&
            <Row>
                <Col>
                    <Button outline color="success">Записаться</Button>
                </Col>
            </Row>}
        </Container>
    )
}

export default Reception;