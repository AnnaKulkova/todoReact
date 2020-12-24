import * as types from "../constants/actionTypes"

export const addTodo = (text, color) => ({
    type: types.ADD_TODO,
    payload: {text, color}
    });
export const toggleTodo = (id) => ({
    type: types.TOGGLE_TODO,
    payload: {id}
    })
export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: {id}
})
export const toggleAll = () => ({
    type: types.TOGGLE_ALL,
});
export const deleteCompleted = () => ({
    type: types.DELETE_COMPLETED,
})
export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    payload: {filter}
})
export const selectColor = (id) => ({
    type: types.SELECT_COLOR,
    payload: {id}
})
