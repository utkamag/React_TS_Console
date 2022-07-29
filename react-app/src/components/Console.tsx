import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import TextArea from "./TextArea";
import Button from "./Button";
import Flex from "./Flex";

const Console: React.FC = () => {

    const ConsoleWrapper = styled.div`
      font-size: 15px;
      color: white;
    `

    return (
        <ConsoleWrapper>
            <Header color={"green"}>TypeScript Console Project 2022</Header>
            <TextArea width={"100%"} height={"70vh"}></TextArea>
            <Flex>
                <Button/>
            </Flex>
        </ConsoleWrapper>
    );
};

export default Console;