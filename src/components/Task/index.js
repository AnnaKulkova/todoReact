import React, {useEffect, useState} from "react";
import './styles.css'

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            animation: '',
        }
    }
    componentDidMount() {
        setTimeout(()=>this.setState({animation:'show'}), 25);
    }

    render() {
        const { completed, id, onChange, data,
                originalColor, deleteItem, visible } = this.props;
        let styleCommon = {};
        let styleTodo = {};
        if (completed) {
             styleCommon =
                {
                    backgroundColor: '#bbbbbb',
                    color: 'rgba(77, 77, 77, 0.4)',
                };
             styleTodo = {
                textDecoration: 'line-through',
            }
        }
        else {
             styleCommon = {
                backgroundColor: originalColor,
                color: 'rgba(77, 77, 77, 1)',
            }
             styleTodo = {
                textDecoration: 'none',
            }
        }
        if (visible) styleCommon.display = 'flex';
        else styleCommon.display = 'none';

        return(
            <div className={"task "+this.state.animation} style={styleCommon}>
                <label className="check-box">
                    <input type="checkbox"
                           checked={completed}
                           onChange={() => onChange(id)}
                    />
                    <span className="custom-checkbox"></span>
                </label>
                <div className="todo-item">
                    <p style={styleTodo}>{data}</p>
                    <button onClick={()=>deleteItem(id)}>×</button>
                </div>
            </div>
        );
    }


}

export default Task;