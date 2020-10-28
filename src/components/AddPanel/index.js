import React from "react";
import TextField from "../TextField/index";
import ColorContainer from "../ColorContainer";
import {useDispatch, useSelector} from "react-redux";
import {toggleAll} from "../../actions";
import todosAPI from "../../api/todosAPI";
import "./styles.css";

function AddPanel() {
    const todos = useSelector (state => state.todos);
    const dispatcher = useDispatch();
    const allItemsMarked = todos.every(todo => todo.completed);
    const jwt = useSelector(st => st.user.jwt);
    const selectAllButtonStyle = allItemsMarked ?
        {color: "#000000"} : {color: "#757575"};
    if (todos.length === 0) {
        selectAllButtonStyle.color = "transparent";
        selectAllButtonStyle.cursor = "default";
    }
    function handleToggleAll() {
        todos.forEach(async todo => {
            try {
                const response = await todosAPI.changeItem(todo.id, {
                    completed: !allItemsMarked}, jwt);
                if (!response.success) {
                    throw new Error ("Changing error");
                }
            } catch (err) {
                return err.message;
            }
        });
        dispatcher(toggleAll());
    }
    return(
        <div className="add-panel">
            <div className="all-checks">
                <button onClick={ handleToggleAll }
                        style={ selectAllButtonStyle }>
                    ❯
                </button>
            </div>
            <TextField />
            <ColorContainer />
        </div>
    );
}

export default AddPanel;
