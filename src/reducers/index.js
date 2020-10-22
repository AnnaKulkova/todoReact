import { combineReducers } from "redux";
import todos from './todos'
import visibilityFilter from "./visibilityFilter";
import colors from "./colors";

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    colors
})

export default todoApp
