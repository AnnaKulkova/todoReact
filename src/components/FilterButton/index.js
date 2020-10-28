import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./styles.css";

function FilterButton({ children, onClick, isActive }) {
    const dispatcher = useDispatch();
    return(
        <button onClick = { () => dispatcher(onClick) }
                className = { `filter-button ${isActive && "button_active"}` }
        >
            { children }
        </button>
    );
}

FilterButton.propTypes = {
    onClick: PropTypes.object.isRequired,
    isActive: PropTypes.bool,
    children: PropTypes.any
};

FilterButton.defaultProps = {
    isActive: false
};

export default FilterButton;