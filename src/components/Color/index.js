import React from "react";
import './styles.css'

function Color(props){
    const { id, color, isActive, selectColor } = props;
    const style = isActive ? "clickedBorder" : "resetBorder";
    return (
        <div className={"color "+style}
             style={{backgroundColor: color}}
             onClick={()=>selectColor(id)}
        />
    );
}



export default Color;
