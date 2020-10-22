import React from "react";
import TaskContainer from "../TaskContainer/index";
import AddPanel from "../AddPanel/index";
import ControlPanel from "../ControlPanel";
import './styles.css';

function Container (){
    return (
        <div className="outer-box">
            <p>todos</p>
            <div className="container">
                <AddPanel />
                <TaskContainer />
                <ControlPanel />
            </div>
        </div>
    );
}

export default Container;