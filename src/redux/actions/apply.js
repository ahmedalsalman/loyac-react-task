import instance from "./instance";

import { getAllPrograms } from "./allprograms";

export const apply = (programID) => async (dispatch) => {
    try {
        await instance.post(`apply/${programID}/`);
        dispatch(getAllPrograms());
    } catch (err) {
        console.error("Error while applying to Program", err);
    }
};