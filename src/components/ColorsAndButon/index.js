import React from "react";
import ColorContainer from "../ColorContainer";
import AddButton from "../AddButton";
import './styles.css'

function ColorsAndButton(props){
    const { colorSet, selectColor, addItem } = props;
    return(
        <div className="color-button-box">
            <ColorContainer
                colorSet={colorSet}
                selectColor={selectColor}
            />
            <AddButton addItem={addItem}/>
        </div>
    )
}

export default ColorsAndButton;