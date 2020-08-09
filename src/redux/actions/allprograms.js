import instance from "./instance";

import { SET_All_PROGRAMS } from "./actionTypes";

export const getAllPrograms = () => async (dispatch) => {
    try {
        const res = await instance.get(`programs/`);
        const programs = res.data;
        dispatch({
            type: SET_All_PROGRAMS,
            payload: programs,
        });
    } catch (err) {
        console.error("Error while fetching allprograms", err);
    }
};