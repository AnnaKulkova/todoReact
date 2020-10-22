import React from "react";
import {useDispatch} from "react-redux";
import './styles.css'

function FilterButton({children, onClick, isActive}) {
    console.log(children,isActive)
    const dispatcher = useDispatch();
    return(
        <button onClick = {() => dispatcher(onClick)}
                className = {`filter-button ${isActive && 'button_active'}`}
        >
            {children}
        </button>
    )
}

export default FilterButton