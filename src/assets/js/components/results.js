import React from "react";
import { connect } from "react-redux";
import NoResults from "./no-results.js";
import Result from "./result.js";

const mapStateToProps = state => {

    return {
        hotels: state.get ("hotels").toJS ().filter (h => {

            let valid = true;
            let minimumStarRating = state.getIn (["filters", "minimumStarRating"]);
            let maximumStarRating = state.getIn (["filters", "maximumStarRating"]);
            let facilities = state.getIn (["filters", "facilities"]).toJS ();

            if (maximumStarRating > 0) {

                if (h.StarRating <= minimumStarRating || h.StarRating > maximumStarRating) {

                    valid = false;
                }
            }

            if (facilities.length && ! h.Facilities.some (f => facilities.indexOf (f) >= 0)) {

                valid = false;
            }

            return valid;

        }).sort ((a, b) => {

            let sortKey = state.getIn (["sorting", "sortKey"]);
            let sortDir = state.getIn (["sorting", "sortDirection"]);

            if (! sortKey.length || sortKey == "Name") { return sortDir == "asc" ? -1 : 1; }

            return sortDir == "asc"
                ? a [sortKey] - b [sortKey]
                : b [sortKey] - a [sortKey];
        }),

        maxStars: state.get ("maximumPermissableStarRating")      
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

class Results extends React.Component {

    render () {

        let {
            maxStars,
            hotels
        } = this.props;

        let resultsContent = hotels.length 
            ? hotels.map ((h, i) => <Result maxStars={ maxStars } hotel={ h } key={ i } />)
            : <NoResults />;

        return (

            <div className="results">

                { resultsContent }

            </div>
        )
    }
}

export default connect (mapStateToProps) (Results);