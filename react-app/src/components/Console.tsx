import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import TextArea from "./TextArea";
import Button from "./Button";
import Flex from "./Flex";
import {useDispatch} from "react-redux";


const Console: React.FC = () => {

    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log('123')
    }

    const ConsoleWrapper = styled.div`
      font-size: 15px;
      color: white;
    `

    return (
        <ConsoleWrapper>
            <Header color={"green"}>TypeScript Console Project 2022</Header>
            <TextArea width={"100%"} height={"70vh"}></TextArea>
            <Flex align={"center"} justify={"flex-end"}>
                <Button primary background={"white"} color={"black"}/>
            </Flex>

        </ConsoleWrapper>
    );
};

export default Console;