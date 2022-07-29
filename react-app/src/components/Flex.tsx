import React from 'react';
import styled from "styled-components";

interface FlexProps {
    children: any
    justify: string
    align: string
}


const Flex: React.FC<FlexProps> = (props) => {

    const StyledFlex = styled.div<FlexProps>`
        display: flex;
        justify-content: ${props => props.justify || "center"};
        align-items: ${props => props.align || "center"};
    `

    return (
        <StyledFlex {...props}/>
    );
};

export default Flex;