import React from "react";
import {useSelector} from "react-redux";
import {visibilityFilters} from "../../constants/actionTypes";
import Task from '../Task';
import './styles.css';

function TaskContainer() {

    const filterFunction = (items, filter) => {
        switch (filter) {
            case visibilityFilters.SHOW_ALL:
                return items
            case visibilityFilters.SHOW_ACTIVE:
                return items.filter(item => !item.completed)
            case visibilityFilters.SHOW_COMPLETED:
                return items.filter(item => item.completed)
            default:
                throw new Error("Unknown filter")
        }
    }

    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.visibilityFilter)
    const filteredTodos = filterFunction(todos, filter);
    return (
        <div className="task-container swing">
            {
                filteredTodos.map((todo) => {
                    return (
                        <Task
                            key = {todo.id}
                            id = {todo.id}
                            text = {todo.text}
                            originalColor = {todo.originalColor}
                            completed = {todo.completed}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskContainer;