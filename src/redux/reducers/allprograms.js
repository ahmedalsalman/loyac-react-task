import { SET_All_PROGRAMS } from "../actions/actionTypes";

export default (programs = [], { type, payload }) => {
    switch (type) {
        case SET_All_PROGRAMS:
            return payload;
        default:
            return programs;
    }
};