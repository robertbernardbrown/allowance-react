import React from "react";
import styled from "styled-components";
import { media } from "../../utils/styles";

const Container = styled.section`
background: rgba(255,255,255,.9);
width: 80%;
height: 100%;
margin: 10px;
display: inline-block;
border-radius: 10px;
${media.phone``}
${media.tablet``}
${media.desktop``}
`;

const Display = ({ component: Component, ...rest }) => (
    <Container>
        <Component {...rest}/>
    </Container>
)

export default Display;