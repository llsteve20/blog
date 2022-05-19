import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import App from "./Components/App";
import reducers from "./Reducers"

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.querySelector("#root")).render(
    <Provider store = {store}>
        <App />
    </Provider>,
);
