import React from "react";
import styled from "styled-components";

const CountContainer = styled.span``;

const Counter:React.FunctionComponent<{counter:number}> = ({counter}) => {
    return (
        <CountContainer>{counter}</CountContainer>
    )
}

export default Counter;