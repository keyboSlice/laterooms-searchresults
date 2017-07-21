import test from "ava";
import * as types from "../assets/js/action-types.js";
import { fromJS } from "immutable";
import { hotelListReducer } from "../assets/js/store.js";

test ("Should handle SET_MINIMUM_STAR_FILTER", t => {

    const stars = 3;
 
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
            minimumStarRating: stars,
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

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.SET_MINIMUM_STAR_FILTER,
            stars
        }).toJS (),

        expected
    );
});

test ("Should handle SET_MAXIMUM_STAR_FILTER", t => {

    const stars = 3;
 
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
            minimumStarRating: 0,
            maximumStarRating: stars,
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

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.SET_MAXIMUM_STAR_FILTER,
            stars
        }).toJS (),

        expected
    );
});

test ("Should handle CLEAR_STAR_FILTERS", t => {

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

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.CLEAR_STAR_FILTERS,
        }).toJS (),

        expected
    );
});

test ("Should handle SET_SORT_KEY", t => {

    const key = "Name";
 
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
            minimumStarRating: 0,
            maximumStarRating: 0,
            facilities: [],
            characterSearch: ""
        },

        sorting: {
            sortKey: key,
            sortDirection: "asc"
        },

        ui: {
            filtersOpen: false
        }

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.SET_SORT_KEY,
            key
        }).toJS (),

        expected
    );
});

test ("Should handle SET_SORT_DIRECTION", t => {

    const direction = "desc";
 
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
            minimumStarRating: 0,
            maximumStarRating: 0,
            facilities: [],
            characterSearch: ""
        },

        sorting: {
            sortKey: "",
            sortDirection: direction
        },

        ui: {
            filtersOpen: false
        }

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.SET_SORT_DIRECTION,
            direction
        }).toJS (),

        expected
    );
});

test ("Should add a facility to the selected facilities array", t => {

    const facility = "car park";
 
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
            minimumStarRating: 0,
            maximumStarRating: 0,
            facilities: [facility],
            characterSearch: ""
        },

        sorting: {
            sortKey: "",
            sortDirection: "asc"
        },

        ui: {
            filtersOpen: false
        }

    }).toJS ();

    t.deepEqual (

        hotelListReducer (undefined, {
            type: types.TOGGLE_FACILITY,
            facility
        }).toJS (),

        expected
    );
});