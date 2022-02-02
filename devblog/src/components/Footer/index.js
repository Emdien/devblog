import React from "react";
import Container from "react-bootstrap/Container";

import { Wrapper, Content } from "./Footer.styles";

const Footer = () => (

    <Wrapper>
        <Content>
            <Container className="align-self-center">
                © Copyright 2022 - Created by Gonzalo Nicolás Martínez
            </Container>
        </Content>
    </Wrapper>

);

export default Footer;