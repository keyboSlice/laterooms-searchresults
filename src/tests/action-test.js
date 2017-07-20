import test from "ava";
import * as actions from "../assets/js/actions.js";
import * as types   from "../assets/js/action-types.js";

test ("Create an action to set the minimum star filter", t => {

    const stars = Math.floor (Math.random () * 5) + 1;

    const expected = {
        type: types.SET_MINIMUM_STAR_FILTER,
        stars
    };

    t.deepEqual (actions.setMinimumStarFilter (stars), expected);
});

test ("Create an action to set the maximum star filter", t => {

    const stars = Math.floor (Math.random () * 5) + 1;

    const expected = {
        type: types.SET_MAXIMUM_STAR_FILTER,
        stars
    };

    t.deepEqual (actions.setMaximumStarFilter (stars), expected);
});

test ("Create an action to clear the star filters", t => {

    const expected = {
        type: types.CLEAR_STAR_FILTERS
    }

    t.deepEqual (actions.clearStarFilters (), expected);
});

test ("Create an action to set the sort key", t => {

    const key = "StarRating";

    const expected = {
        type: types.SET_SORT_KEY,
        key
    };

    t.deepEqual (actions.setSortKey (key), expected);
});

test ("Create an action to set the sort direction", t => {

    const direction = "asc";

    const expected = {
        type: types.SET_SORT_DIRECTION,
        direction
    };

    t.deepEqual (actions.setSortDirection (direction), expected);
});

test ("Create an action to select all facilities", t => {

    const expected = {
        type: types.SELECT_ALL_FACILITIES
    };

    t.deepEqual (actions.selectAllFacilities (), expected);
});

test ("Create an action to de-select all facilities", t => {

    const expected = {
        type: types.DESELECT_ALL_FACILITIES        
    };

    t.deepEqual (actions.deselectAllFacilities (), expected);
});