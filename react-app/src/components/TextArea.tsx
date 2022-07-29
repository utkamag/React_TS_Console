import React from 'react';
import styled from "styled-components";

interface TextAreaProps {
    height: string
    width: string
}


const TextArea: React.FC<TextAreaProps> = (props) => {

    const StiledTextArea = styled.textarea<TextAreaProps>`
      width: ${props => props.width};
      height: ${props => props.height};
      background-color: black;
      margin-top: 10px;
      color: white;
      font-size: 20px;
      resize: none;
      border: none;
      outline: none;
    `

    return (
        <StiledTextArea {...props}/>
    );
};

export default TextArea;