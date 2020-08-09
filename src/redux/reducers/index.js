import { combineReducers } from "redux";

import errors from "./errors";
import user from "./user";
import allprograms from "./allprograms";

export default combineReducers({
    user,
    errors,
    allprograms,
});