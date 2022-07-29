import React from 'react';
import {css, keyframes} from 'styled-components';
import styled from "styled-components";
import {ucs2} from "punycode";

interface ButtonProps {
    primary: any
    color: string
    background: string
}


const Button: React.FC<ButtonProps> = (props) => {

    const RotateAnimation = keyframes`
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    `

    const StyledButton = styled.button<ButtonProps>`
      background-color: cornsilk;
      margin-right: 100px;
      border: none;
      padding: 10px 15px;
      font-size: 18px;
      cursor: pointer;
      // Единый стиль как в MaterialUI (primary)
      ${props => props.primary && css <ButtonProps>`
        color: ${props => props.color || "white"};
        background-color: ${props => props.background || "white"};
      `}
      // Подключаем анимацию
      &:active {
        animation: ${RotateAnimation} 1s linear;
      }
    `

    // Расширяем стиль кнопки, передаем стили из одного компонента в другой

    const LargeButton = styled(StyledButton)`
      color: red;
    `

    return (
        <StyledButton {...props}>Отправить</StyledButton>
    );
};

export default Button;