import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import colors from "./colors";
import user from "./user";

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    colors,
    user
});

export default todoApp;
