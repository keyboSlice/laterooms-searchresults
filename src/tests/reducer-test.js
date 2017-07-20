import test from "ava";
import * as types from "../assets/js/action-types.js";
import { fromJS } from "immutable";
import { hotelListReducer } from "../assets/js/store.js";

test ("Should handle SET_MINIMUM_STAR_FILTER", t => {
 
    const expected = fromJS ({

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
            minimumStarRating: 3,
            maximumStarRating: 0,
            facilities: [],
            characterSearch: ""
        },

        sorting: {
            sortKey: "",
            sortDirection: "asc"
        }
    });

    t.deepEqual (
        hotelListReducer ([], { 
            type: types.SET_MINIMUM_STAR_FILTER,
            stars: 3
        }),
        expected
    );    
});