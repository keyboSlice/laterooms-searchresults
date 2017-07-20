import React from "react";
import { connect } from "react-redux";
import { 
    setMinimumStarFilter,
    setMaximumStarFilter 
} from "../actions.js";
import Stars from "./stars.js";

const mapStateToProps = state => {

    return {
        minStars: state.get ("minimumPermissableStarRating"),
        maxStars: state.get ("maximumPermissableStarRating"),
        starsLow: state.getIn (["filters", "minimumStarRating"]),
        starsHigh: state.getIn (["filters", "maximumStarRating"])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onStarSliderChange (values) {
            dispatch (setMinimumStarFilter (values [0]));
            dispatch (setMaximumStarFilter (values [1]));
        }
    };
};

class Filters extends React.Component {

    render () {        

        let { 
            minStars, 
            maxStars,
            starsLow,
            starsHigh,
            onStarSliderChange } = this.props;

        return  (
            <div className="filters page__component">

                <div className="filters__block filters__block--stars-container">
                    
                    <h2 className="filters__block-title">Stars</h2>

                    <Stars 
                        starsHigh={ starsHigh }
                        starsLow={ starsLow }
                        minStars={ minStars }
                        maxStars={ maxStars }
                        onStarSliderChange={ onStarSliderChange } />

                </div>

                <div className="filters__block filters__block--facilities-container">

                    <h2 className="filters__block-title">Facilities</h2>

                </div>
            </div>
        )
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Filters);