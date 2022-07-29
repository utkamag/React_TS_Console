import React from 'react';
import styled from "styled-components";

interface FlexProps {
    children: any
}


const Flex: React.FC<FlexProps> = (props) => {

    const StyledFlex = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    return (
        <StyledFlex {...props}/>
    );
};

export default Flex;