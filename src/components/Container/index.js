import React, { useEffect } from "react";
import TaskContainer from "../TaskContainer/index";
import AddPanel from "../AddPanel/index";
import ControlPanel from "../ControlPanel";
import { useDispatch, useSelector } from "react-redux";
import todosAPI from "../../api/todosAPI";
import { setTodos } from "../../actions";
import LogoutButton from "../LogoutButton";
import "./styles.css";

function Container() {
    const user = useSelector(st => st.user);
    const dispatcher = useDispatch();
    useEffect(() => {
        async function getItemsFromServer() {
            try {
                const response = await todosAPI.getAllItems(user.jwt);
                if (!response.success) {
                    throw new Error(response.message);
                }
                const userItems = response.result.items.filter(
                    item => item.userID === user.id);
                dispatcher(setTodos(userItems));
            } catch (e) {
                if (e.message === "UnauthorizedError") {
                    console.log(e.message);
                }
            }
        }
        getItemsFromServer();
    });
    return (
        <div className="outer-box">
            <p>todos</p>
            <div className="container">
                <AddPanel />
                <TaskContainer />
                <ControlPanel />
            </div>
            <LogoutButton />
        </div>
    );
}

export default Container;