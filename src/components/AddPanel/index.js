import React from "react";
import TextField from "../TextField/index";
import ColorContainer from "../ColorContainer";
import {useDispatch, useSelector} from "react-redux";
import {toggleAll} from "../../actions";
import './styles.css'

function AddPanel() {
    const todos = useSelector (state => state.todos);
    const dispatcher = useDispatch();
    const allItemsMarked = todos.every(todo => todo.completed);
    const selectAllButtonStyle = allItemsMarked ?
        {color: "#000000"} : {color: "#757575"};
    if (todos.length === 0) {
        selectAllButtonStyle.color = 'transparent';
        selectAllButtonStyle.cursor = 'default';
    }
    return(
        <div className="add-panel">
            <div className="all-checks">
                <button onClick={() => dispatcher(toggleAll())}
                        style={selectAllButtonStyle}>
                    ❯
                </button>
            </div>
            <TextField />
            <ColorContainer />
        </div>
    )
}

export default AddPanel;
