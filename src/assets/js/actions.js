import * as types from "./action-types.js";

export function setMinimumStarFilter (stars) {

    return {
        type: types.SET_MINIMUM_STAR_FILTER,
        stars
    };
}

export function setMaximumStarFilter (stars) {

    return {
        type: types.SET_MAXIMUM_STAR_FILTER,
        stars
    };
}

export function clearStarFilters () {

    return {
        type: types.CLEAR_STAR_FILTERS
    };
}

export function setSortKey (key) {

    return {
        type: types.SET_SORT_KEY,
        key
    };   
}

export function setSortDirection (direction) {

    return {
        type: types.SET_SORT_DIRECTION,
        direction
    };
}

export function toggleFacility (facility) {

    return {
        type: types.TOGGLE_FACILITY,
        facility
    };
}

export function selectAllFacilities () {

    return {
        type: types.SELECT_ALL_FACILITIES
    };
}

export function deselectAllFacilities () {

    return {
        type: types.DESELECT_ALL_FACILITIES
    };
}