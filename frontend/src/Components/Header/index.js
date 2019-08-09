import React from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import mapMarker from '../../img/icons/map-marker.png';
import clock from '../../img/icons/clock.png';
import phone from '../../img/icons/phone.png';
import './style.css';

function Header(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={logo} alt='логотип' />
                </Col>
                <Col>
                    <Nav className='main-menu'>
                        <NavItem>
                            <NavLink exact to='/' activeClassName='active'>Главная</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/services' activeClassName='active'>Услуги</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/doctors' activeClassName='active'>Специалисты</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contacts' activeClassName='active'>Контакты</NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{float: "left"}}>
                        <img src={mapMarker} alt='mapMarker' />
                    </div>
                    <div style={{float: "left"}}>
                        <h6>Ленина, 20</h6>
                        <p>Волжск, Марий Эл</p>
                    </div>
                </Col>
                <Col>
                    <div style={{float: "left"}}>
                        <img src={clock} alt='clock' />
                    </div>
                    <div style={{float: "left"}}>
                        <h6>Режим работы :</h6>
                        <p>Пн-Пт: 8:00 - 20:00</p>
                    </div>
                </Col>
                <Col>
                    <div style={{float: "left"}}>
                        <img src={phone} alt='phone' />
                    </div>
                    <div style={{float: "left"}}>
                        <h6>Телефон</h6>
                        <p>+7 (906) 777 77 77</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;