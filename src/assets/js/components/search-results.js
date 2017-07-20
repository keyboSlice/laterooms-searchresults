import React from "react";
import Filters from "./filters.js";

export default class SearchResults extends React.Component {

    render () {

        return (
            <main className="page-wrapper">
                <Filters />
                <Results />
            </main> 
        );  
    }
}