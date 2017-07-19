import { fromJS } from "immutable";
import { createStore } from "redux";

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

    filters: {
        minimumStarRating: 0,
        maximumStarRating: 0,
        facilities: [],
        characterSearch: ""
    },

    sorting: {
        sortKey: "",
        sortDirection: "asc"
    }
});

function hotelListReducer (state = initialState, action) {

    return state;
}

export default createStore (hotelListReducer);


