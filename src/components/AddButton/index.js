import React from "react";
import './styles.css'

function AddButton(props){
    return (
        <div className="add-button">
            <input type="button" value="Add" onClick={props.addItem} />
        </div>
    )
}

export default AddButton;