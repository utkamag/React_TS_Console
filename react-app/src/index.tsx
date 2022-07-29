import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-family: Consolas;
  }
`

//Стили и медиа запросы

const theme = {
    colors: {
        primary: "white",
        secondary: "black"
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768px)"
    }
}

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Global/>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
);
