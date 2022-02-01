import React from "react";

import { Wrapper, Content } from "./CardList.styles";

import SearchBar from "../SearchBar";

const CardList = () => {

    return (
        <Wrapper>
            <Content>
                <SearchBar />
            </Content>
        </Wrapper>
    );
}


export default CardList;