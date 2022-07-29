import React from 'react';
import {Route, Routes} from "react-router-dom";
import Console from "./components/Console";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Console/>}/>
        </Routes>
    );
};

export default App;