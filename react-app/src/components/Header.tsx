import React from 'react';
import styled from "styled-components";

interface HeaderProps {
    children: string
    color: string
}

const Header: React.FC<HeaderProps> = (props) => {

    const StiledHeader = styled.div<HeaderProps>`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      font-size: 38px;
      color: ${props => props.color };
    `

    return (
        <StiledHeader {...props}></StiledHeader>
    );
};

export default Header;