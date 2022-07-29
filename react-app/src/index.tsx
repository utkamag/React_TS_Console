import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";


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

root.render(
    <BrowserRouter>
        <Global/>
        <App/>
    </BrowserRouter>
);
