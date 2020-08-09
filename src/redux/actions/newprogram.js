import instance from "./instance";

import { getAllPrograms } from "./allprograms";

export const createProgram = (programData, history) => async (dispatch) => {
    try {
        const res = await instance.post(`newprogram/`, programData);
        const newprogram = res.data;
        dispatch(getAllPrograms());
        if (newprogram) history.push("/home");
    } catch (err) {
        console.error("Error while Creating Program", err);
    }
};