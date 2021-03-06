import { fromJS } from "immutable";
import { createStore } from "redux";
import * as types from "./action-types.js";

const initialState = fromJS ({

    hotels: [
        {
            "Name": "hotelone",
            "StarRating": 5,
            "Facilities": ["car park", "pool"]
        },
        {
            "Name": "hoteltwo",
            "StarRating": 3,
            "Facilities": ["car park", "gym"]
        },
        {
            "Name": "hotelthree",
            "StarRating": 2,
            "Facilities": []
        },
        {
            "Name": "hotelfour",
            "StarRating": 1,
            "Facilities": ["car park", "pool"]
        },
        {
            "Name": "hotelfive",
            "StarRating": 3,
            "Facilities": ["pool"]
        },
        {
            "Name": "hotelsix",
            "StarRating": 4,
            "Facilities": ["gym", "pool", "car park"]
        } 
    ],

    maximumPermissableStarRating: 5,
    minimumPermissableStarRating: 0,

    filters: {
        minimumStarRating: 0,
        maximumStarRating: 0,
        facilities: [],
        characterSearch: ""
    },

    sorting: {
        sortKey: "",
        sortDirection: "asc"
    },

    ui: {
        filtersOpen: false
    }
});

export function hotelListReducer (state = initialState, action) {

    switch (action.type) {

        case types.SET_MINIMUM_STAR_FILTER:

            return state.setIn (["filters", "minimumStarRating"], action.stars);

        case types.SET_MAXIMUM_STAR_FILTER:

            return state.setIn (["filters", "maximumStarRating"], action.stars);

        case types.CLEAR_STAR_FILTERS:

            state = state.setIn (["filters", "minimumStarRating"], 0);
            return state.setIn (["filters", "maximumStarRating"], 0);

        case types.SET_SORT_KEY:

            return state.setIn (["sorting", "sortKey"], action.key);

        case types.SET_SORT_DIRECTION:

            return state.setIn (["sorting", "sortDirection"], action.direction);

        case types.TOGGLE_FACILITY:

            let facilities  = state.getIn (["filters", "facilities"]).toJS ();
            let toggleIndex = facilities.indexOf (action.facility);

            if (toggleIndex == -1) {

                facilities.push (action.facility);
            }
            else {

                facilities.splice (toggleIndex, 1);
            }

            return state.setIn (["filters", "facilities"], fromJS (facilities));

        case types.TOGGLE_FILTERS:

            return state.setIn (["ui", "filtersOpen"], ! state.getIn (["ui", "filtersOpen"]));

        default:

            return state;
    }
}

export default createStore (hotelListReducer);