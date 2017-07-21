import React from "react";
import { connect } from "react-redux";

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
        }),

        minimumStarRating: state.getIn (["filters", "minimumStarRating"]),
        maximumStarRating: state.getIn (["filters", "maximumStarRating"])      
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

    };
};

class Results extends React.Component {

    render () {

        let {
            minimumStarRating,
            maximumStarRating,
            hotels
        } = this.props;

        let resultsContent = hotels.length 
            ? "foo"
            : <div className="results__no-results page__component">
                <h1 className="results__no-results-title">
                    <i className="fa fa-frown-o"></i>
                    Sorry!<br />No results matched your search
                </h1>
            </div>

        return (

            <div className="results">

                { resultsContent }

            </div>
        )
    }
}

export default connect (mapStateToProps) (Results);