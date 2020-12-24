import React, {useState} from "react";
import {addTodo} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import './styles.css';

function TextField() {

    const [text, setText] = useState('');
    const dispatcher = useDispatch();
    const colors = useSelector(state => state.colors);
    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        const selectedColor = colors.find(color => color.active);
        const text = e.target.value.trim();
        const color = selectedColor ? selectedColor.color : 'transparent';
        if (!text) return;
        if (e.which === 13) {
            dispatcher(addTodo(text, color));
            setText('');
        }
    }

    return (
        <div className = 'text-field'>
            <input type = "text"
                   placeholder = "Add new Item"
                   autoFocus = {true}
                   onChange = {handleChange}
                   value = {text}
                   onKeyDown = {handleSubmit}
            />
        </div>
    )
}

export default TextField;