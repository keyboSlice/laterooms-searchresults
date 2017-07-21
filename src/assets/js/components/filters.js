import React from "react";
import { connect } from "react-redux";
import { 
    setMinimumStarFilter,
    setMaximumStarFilter,
    toggleFacility
} from "../actions.js";
import Stars from "./stars.js";
import Facilities from "./facilities.js";

const mapStateToProps = state => {

    return {
        minStars: state.get ("minimumPermissableStarRating"),
        maxStars: state.get ("maximumPermissableStarRating"),
        starsLow: state.getIn (["filters", "minimumStarRating"]),
        starsHigh: state.getIn (["filters", "maximumStarRating"]),
        facilities: [... new Set (
            state.get ("hotels").toJS ()
                .map (h => h.Facilities)
                .reduce ((a, b) => a.concat(b))
            )
        ],
        activeFacilities: state.getIn (["filters", "facilities"])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onStarSliderChange (values) {
            dispatch (setMinimumStarFilter (values [0]));
            dispatch (setMaximumStarFilter (values [1]));
        },

        onFacilityClick (facility) {
            dispatch (toggleFacility (facility));
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
            onStarSliderChange,
            facilities,
            activeFacilities,
            onFacilityClick } = this.props;

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

                    <Facilities
                        facilities={ facilities }
                        activeFacilities={ activeFacilities }
                        onFacilityClick={ onFacilityClick } />

                </div>
            </div>
        )
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Filters);