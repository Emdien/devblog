import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Pfp from "../../images/reze.png";

import { Wrapper, Content, Profile } from './HomeHeader.styles';

const HomeHeader = () => (
    <Wrapper>
        <Content>
            <Row>
                <Col xs={12} md={4} className="align-self-center text-center">
                    <Image src={Pfp} className="img-fluid rounded-circle" />
                </Col>
                <Col xs={12} md={8} className="align-self-center">
                    <h1>¡Hola!</h1>
                    <h2>(Temp.)Me llamo Gonzalo, aunque se me conoce más como Emdien o MdN. Soy un graduado en Ingeniería del Software, y este es mi blog donde escribo cualquier cosa que se me pasa por la cabeza.</h2>
                </Col>
            </Row>
        </Content>
    </Wrapper>
);

export default HomeHeader;