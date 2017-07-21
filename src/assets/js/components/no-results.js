import React from "react";

export default class NoResults extends React.Component {

    render () {

        return <div className="results__no-results page__component">
            <h1 className="results__no-results-title">
                <i className="fa fa-frown-o"></i>
                Sorry!<br />No results matched your search
            </h1>
        </div>
    }
}