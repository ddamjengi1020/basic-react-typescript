import React from "react";
import styled from "styled-components";

const CountContainer = styled.div<{isBlue:boolean}>`
    color: ${props=> props.isBlue? props.theme.redColor : props.theme.greenColor};
    font-size: 30px;
    font-weight: 700;
`;

interface ICounterProps {
    counter: number
}

const Counter:React.FunctionComponent<ICounterProps> = ({counter}) => {
    return (
        <CountContainer isBlue={counter> 10}>{counter}</CountContainer>
    )
}

export default Counter;