import React from "react";
import {useDispatch} from "react-redux";
import './styles.css'

function Color(props) {
    const { color, isActive, onClick } = props;
    const dispatcher = useDispatch();
    const style = isActive ? "clickedBorder" : "resetBorder";
    return (
        <div className = {"color "+style}
             style = {{backgroundColor: color}}
             onClick = {() => dispatcher(onClick)}
        />
    );
}

export default Color;
