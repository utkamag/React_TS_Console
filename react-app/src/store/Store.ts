import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {firstreducer} from "./firstreducer";


const store = createStore({firstreducer}, applyMiddleware(thunk))