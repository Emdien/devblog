import React from "react";
import Container from "react-bootstrap/Container";
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
                <Col xs={12} md={8}>
                    <p>Hola!</p>
                </Col>
            </Row>
        </Content>
    </Wrapper>
);

export default HomeHeader;