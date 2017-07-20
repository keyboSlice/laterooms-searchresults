import * as types from "./action-types.js";

export function setMinimumStarFilter (stars) {

    return {
        type: types.SET_MINIMUM_STAR_FILTER,
        stars
    }
}