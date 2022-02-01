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
                <Col xs={12} md={8} className="pt-5">
                    <h1>¡Hola!</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et vulputate neque. Cras massa massa, dapibus porta ex eget, convallis gravida erat. Suspendisse potenti. Vivamus venenatis libero in eros commodo, eu dictum est venenatis. Vivamus rhoncus ex diam, id tincidunt ex mollis eu.</h2>
                </Col>
            </Row>
        </Content>
    </Wrapper>
);

export default HomeHeader;