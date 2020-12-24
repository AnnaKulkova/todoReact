import React, { useState } from "react";
import { addTodo } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import todosAPI from "../../api/todosAPI";
import "./styles.css";

function generateID() {
    return `f${(Math.floor(Math.random() * 1e8)).toString(16)}`;
}

function TextField() {
    const [text, setText] = useState("");
    const dispatcher = useDispatch();
    const user = useSelector(st => st.user);
    const colors = useSelector(state => state.colors);
    function handleChange(e) {
        setText(e.target.value);
    }

    async function handleSubmit(e) {
        const selectedColor = colors.find(color => color.active);
        const text = e.target.value.trim();
        const color = selectedColor ? selectedColor.color : "transparent";
        const id = generateID();
        if (!text) return;
        if (e.which === 13) {
            try {
                e.preventDefault();
                const response = await todosAPI.addNewItem({
                    id: id,
                    data: text,
                    originalColor: color,
                    completed: false,
                    userID: user.id
                }, user.jwt);
                if (!response.success) {
                    throw new Error ("Adding error");
                }
                dispatcher(addTodo(id, text, color));
            } catch (e) {
                return e.message;
            } finally {
                setText("");
            }
        }
    }

    return (
        <div className = 'text-field'>
            <input type = "text"
                   placeholder = "Add new Item"
                   autoFocus = { true }
                   onChange = { handleChange }
                   value = { text }
                   onKeyDown = { handleSubmit }
            />
        </div>
    );
}

export default TextField;