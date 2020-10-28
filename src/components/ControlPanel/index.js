import React from "react";
import { useSelector } from "react-redux";
import { deleteCompleted, setVisibilityFilter } from "../../actions";
import { visibilityFilters } from "../../constants/actionTypes";
import FilterButton from "../FilterButton";
import ClearButton from "../ClearButton";
import "./styles.css";

function ControlPanel() {
    const todos = useSelector(state => state.todos);
    const currentFilter = useSelector(state => state.visibilityFilter);
    const todoCount = todos.length;
    const completedTodoCount = todos.filter(todo =>
        todo.completed).length;
    const panelStyle = todoCount ? {display: "flex"} : {display: "none"};

    return(
        <div className = "control-panel" style = { panelStyle }>
            <p>{ todoCount - completedTodoCount } items left</p>
            <div className = "filters">
                <FilterButton
                    onClick = { setVisibilityFilter(visibilityFilters.SHOW_ALL) }
                    isActive = { currentFilter === visibilityFilters.SHOW_ALL }
                >
                    All
                </FilterButton>
                <FilterButton
                    onClick = { setVisibilityFilter(visibilityFilters.SHOW_ACTIVE) }
                    isActive = { currentFilter === visibilityFilters.SHOW_ACTIVE }
                >
                    Active
                </FilterButton>
                <FilterButton
                    onClick = { setVisibilityFilter(visibilityFilters.SHOW_COMPLETED) }
                    isActive = { currentFilter === visibilityFilters.SHOW_COMPLETED }
                >
                    Completed
                </FilterButton>
            </div>
            <div className = "clear">
                <ClearButton onClick={ deleteCompleted() }>Clear completed</ClearButton>
            </div>
        </div>
    );
}

export default ControlPanel;