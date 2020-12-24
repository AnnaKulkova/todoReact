import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions";
import PropTypes from "prop-types";
import "./styles.css";
import todosAPI from "../../api/todosAPI";

function Task({ id, completed, originalColor, text }) {
    const dispatcher = useDispatch();
    let styleCommon;
    let styleTodo;
    if (completed) {
          styleCommon =
            {
                backgroundColor: "#bbbbbb",
                color: "rgba(77, 77, 77, 0.4)",
            };
         styleTodo = {
            textDecoration: "line-through",
        };
    }
    else {
         styleCommon = {
            backgroundColor: originalColor,
            color: "rgba(77, 77, 77, 1)",
        };
         styleTodo = {
            textDecoration: "none",
        };
    }

    const jwt = useSelector(st => st.user.jwt);
    const handleToggle = async(e) => {
        e.preventDefault();
        try {
            const response = await todosAPI.changeItem(id, {
                completed: e.target.checked}, jwt);
            if (!response.success) {
                throw new Error ("Changing error");
            }
            dispatcher(toggleTodo(id));
        } catch (err) {
            return err.message;
        }
    };

    const handleDelete = async(e) => {
        e.preventDefault();
        try{
            const response = await todosAPI.deleteItem(id, jwt);
            if (!response.success) {
                throw new Error ("Deleting error");
            }
            dispatcher(deleteTodo(id));
        } catch (err) {
            return err.message;
        }
    };

    return(
        <div className = "task show" style = { styleCommon }>
            <label className = "check-box">
                <input type = "checkbox"
                       checked = { completed }
                       onChange = { handleToggle }
                />
                <span className="custom-checkbox"/>
            </label>
            <div className = "todo-item">
                <p style = { styleTodo }>{ text }</p>
                <button
                     onClick = { handleDelete }>
                    ×
                </button>
            </div>
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    originalColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

Task.defaultProps = {
    completed: false,
    text: "",
    originalColor: "transparent"
};

export default Task;