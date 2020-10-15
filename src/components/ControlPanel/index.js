import React from "react";
import './styles.css'

class ControlPanel extends React.Component{

    render(){
        const { itemCount, clearAllCompleted, allFilter,
                activeFilter, completedFilter, buttons,
                inCompletedItemsCount} = this.props;
        const selectedStyle = {
            border: '1px solid rgba(0,0,0,0.3)',
            borderRadius: '2px',
        }
        const resetStyle = {
            border: 'none',
        }
        const styleAll = buttons[0].selected? selectedStyle:resetStyle;
        const styleActive = buttons[1].selected? selectedStyle:resetStyle;
        const styleCompleted = buttons[2].selected? selectedStyle:resetStyle;
        const panelStyle = itemCount ? {display: 'flex'} : {display: 'none'}
        return(
            <div className="control-panel" style={panelStyle}>
                <p>{inCompletedItemsCount} items left</p>
                <div className="filters">
                    <button onClick={allFilter} style={styleAll}>All</button>
                    <button onClick={activeFilter} style={styleActive}>Active</button>
                    <button onClick={completedFilter} style={styleCompleted}>Completed</button>
                </div>
                <div className="clear">
                    <button onClick={clearAllCompleted}>Clear completed</button>
                </div>
            </div>
        )
    }
}

export default ControlPanel;