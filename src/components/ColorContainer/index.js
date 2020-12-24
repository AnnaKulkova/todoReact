import React from "react";
import Color from "../Color/index";
import {useSelector} from "react-redux";
import {selectColor} from "../../actions";
import './styles.css'

function ColorContainer(){
    const colorSet = useSelector(state => state.colors);
    return (
        <ul className = "color-container">
            {colorSet.map(color => {
                return(
                    <li key = {color.id}>
                        <Color
                            id = {color.id}
                            color = {color.color}
                            isActive = {color.active}
                            onClick = {selectColor(color.id)}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default ColorContainer;