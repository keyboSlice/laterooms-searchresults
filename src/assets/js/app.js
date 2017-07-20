import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import SearchResults from "./components/search-results.js";

ReactDOM.render (
    <Provider store={ store }>
        <SearchResults />
    </Provider>,
    document.getElementById ("app")
);