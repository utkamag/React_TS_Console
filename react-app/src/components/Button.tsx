import React from 'react';
import styled from "styled-components";


const Button: React.FC = () => {

    const StyledButton = styled.button`
      background-color: cornsilk;
    `

    return (
        <StyledButton>Отправить</StyledButton>
    );
};

export default Button;