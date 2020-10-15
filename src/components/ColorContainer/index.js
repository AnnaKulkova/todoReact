import React from "react";
import Color from "../Color/index";
import './styles.css'

function ColorContainer(props){
    const { colorSet, selectColor } = props;
    return (
        <ul className="color-container">
            {colorSet.map(color=>{
                return(
                    <li key={color.id}>
                        <Color
                            id={color.id}
                            color={color.color}
                            isActive={color.active}
                            selectColor={selectColor}
                        />
                    </li>

                )
            })}
        </ul>
    )
}

export default ColorContainer;