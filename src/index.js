import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {createStore} from "redux";

import App from "./Components/App";
import reducers from "./Reducers"


ReactDOM.createRoot(document.querySelector("#root")).render(
    <Provider store = {createStore(reducers)}>
        <App />
    </Provider>,
);
