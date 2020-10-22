import React from "react";
import {useDispatch} from "react-redux";
import {toggleTodo, deleteTodo} from "../../actions";
import './styles.css'

function Task ({ id, completed, originalColor, text }){

    let styleCommon;
    let styleTodo;
    if (completed) {
          styleCommon =
            {
                backgroundColor: '#bbbbbb',
                color: 'rgba(77, 77, 77, 0.4)',
            };
         styleTodo = {
            textDecoration: 'line-through',
        }
    }
    else {
         styleCommon = {
            backgroundColor: originalColor,
            color: 'rgba(77, 77, 77, 1)',
        }
         styleTodo = {
            textDecoration: 'none',
        }
    }
    const dispatcher = useDispatch();
    return(
        <div className = "task show" style = {styleCommon}>
            <label className = "check-box">
                <input type = "checkbox"
                       checked = {completed}
                       onChange = {() => dispatcher(toggleTodo(id))}
                />
                <span className="custom-checkbox"/>
            </label>
            <div className = "todo-item">
                <p style = {styleTodo}>{text}</p>
                <button
                    onClick = {() => dispatcher(deleteTodo(id))}>
                    ×
                </button>
            </div>
        </div>
    );
}

export default Task;