import React from "react";
import { connect } from "react-redux";
import { 
    setMinimumStarFilter,
    setMaximumStarFilter,
    toggleFacility,
    setSortDirection,
    setSortKey,
    toggleFilters
} from "../actions.js";
import { Collapse } from "react-collapse";
import Stars from "./stars.js";
import Facilities from "./facilities.js";
import SortButton from "./sort-button.js";

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
        activeFacilities: state.getIn (["filters", "facilities"]),
        sortDirection: state.getIn (["sorting", "sortDirection"]),
        sortKey: state.getIn (["sorting", "sortKey"]),
        filtersOpen: state.getIn (["ui", "filtersOpen"])
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
        },

        onSortButtonClick (direction) {
            dispatch (setSortDirection (direction));            
        },

        onSortKeySelectChange (key) {
            dispatch (setSortKey (key));
        },

        onFiltersCollapseButtonClick () {
            dispatch (toggleFilters ());
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
            onFacilityClick,
            sortDirection,
            sortKey,
            onSortButtonClick,
            onSortKeySelectChange,
            filtersOpen,
            onFiltersCollapseButtonClick } = this.props;

        let isOpened = window.innerWidth > 768 || filtersOpen;
        let collapseButtonClass = `filters__collapse-button ${isOpened ? "filters_collapse-button--active" : ""}`;

        return  (
            <div className="filters">

                <div className={ collapseButtonClass } onClick={ onFiltersCollapseButtonClick }><i className="fa fa-filter"></i> Filters</div>

                <Collapse isOpened={ isOpened }>

                    <div className="page__component">

                        <div className="filters__block filter__block--sort-container">

                            <h2 className="filters__block-title">Sorting</h2>

                            <div className="filters__sort-wrapper">

                                <select className="filters__sort-select" onChange={ e => onSortKeySelectChange (e.target.value) } value={ sortKey }>
                                    <option value="">Sort by:</option>
                                    <option value="Name">Name</option>
                                    <option value="StarRating">Star Rating</option>
                                </select>

                                <div className="filter__sort-buttons">
                                    <SortButton direction="asc" activeDirection={ sortDirection } onClick={ () => onSortButtonClick ("asc") } />
                                    <SortButton direction="desc" activeDirection={ sortDirection } onClick={ () => onSortButtonClick ("desc") } />
                                </div>

                            </div>

                        </div>

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
                </Collapse>
            </div>
        )
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Filters);