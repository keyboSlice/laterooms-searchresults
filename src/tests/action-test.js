import test from "ava";
import * as actions from "../assets/js/actions.js";
import * as types   from "../assets/js/action-types.js";

test ("Create an action to set the minimum star filter", t => {

    const stars = 2;

    const expected = {
        type: types.SET_MINIMUM_STAR_FILTER,
        stars
    };

    t.is (actions.setMinimumStarFilter (stars), expected);
});