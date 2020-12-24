import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";

function Color({ color, isActive, onClick }) {
    const dispatcher = useDispatch();
    const style = isActive ? "clickedBorder" : "resetBorder";
    return (
        <div className = { "color " + style }
             style = { { backgroundColor: color } }
             onClick = { () => dispatcher(onClick) }
        />
    );
}

Color.propTypes = {
    color: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.object.isRequired
};

Color.defaultProps = {
    color: "transparent",
    isActive: false
};
export default Color;
