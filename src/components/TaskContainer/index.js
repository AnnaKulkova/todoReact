import React from "react";
import Task from '../Task/index';
import './styles.css';

class TaskContainer extends React.Component {
    render() {
        const {items, onChange, deleteItem } = this.props;
        return (
            <div className="task-container swing">
                {
                    items.map((item) => {
                        return (
                            <Task
                                item={item}
                                id={item.id}
                                data={item.data}
                                completed={item.completed}
                                onChange={onChange}
                                originalColor={item.originalColor}
                                deleteItem={deleteItem}
                                key={item.id}
                                visible={item.visible}
                            />
                        )
                    })
                }
            </div>
        )
    }

}

export default TaskContainer;