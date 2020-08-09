import { combineReducers } from "redux";

import errors from "./errors";
import user from "./user";
import programs from "./programs";

export default combineReducers({
    user,
    errors,
    programs,
});