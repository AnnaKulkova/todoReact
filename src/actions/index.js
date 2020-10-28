import * as types from "../constants/actionTypes";

export const addTodo = (id, text, color) => ({
    type: types.ADD_TODO,
    payload: {
        id,
        text,
        color
    }});

export const toggleTodo = (id) => ({
    type: types.TOGGLE_TODO,
    payload: {
        id
    }});

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: {
        id
    }});

export const toggleAll = () => ({
    type: types.TOGGLE_ALL,
});

export const deleteCompleted = () => ({
    type: types.DELETE_COMPLETED,
});

export const setVisibilityFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    payload: {
        filter
    }});

export const selectColor = (id) => ({
    type: types.SELECT_COLOR,
    payload: {
        id
    }});

export const addJWT = (id, jwt) => ({
    type: types.ADD_JWT,
    payload: {
        id,
        jwt
    }});

export const setTodos = (todos) => ({
    type: types.SET_TODOS_FROM_SERVER,
    payload: {
        todos
    }});

export const removeJWT = () => ({
    type: types.REMOVE_JWT,
    });