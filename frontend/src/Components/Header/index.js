import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink  } from 'reactstrap';
import logo from '../../img/logo.png'

function Header() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={logo} alt='логотип' />
                </Col>
                <Col>
                    <Nav>
                        <NavItem>
                            <NavLink href="#">Главная</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Услуги</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Специалисты</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="#">Контакты</NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;