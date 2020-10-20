import React from "react";
import TaskContainer from "../TaskContainer/index";
import AddPanel from "../AddPanel/index";
import ControlPanel from "../ControlPanel";
import './styles.css';

class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[

            ],
            colors: [
                {
                    id: '0',
                    color: '#ee6a68',
                    active: false
                },
                {
                    id: '1',
                    color: '#f379a2',
                    active: false
                },
                {
                    id: '2',
                    color: '#9170cb',
                    active: false
                },
                {
                    id: '3',
                    color: '#5eb3f6',
                    active: false
                },
                {
                    id: '4',
                    color: '#67d7e5',
                    active: false
                },
                {
                    id: '5',
                    color: '#ffe083',
                    active: false
                },

            ],
            input: {
                data:'',
                isClear: false,
                visible: false,
            },
            controlButtons:[
                {id:1, selected: false},
                {id:2, selected: false},
                {id:3, selected: false}
            ]
        }
        this.changeCheckBoxState = this.changeCheckBoxState.bind(this);
        this.selectColor = this.selectColor.bind(this);
        this.activateButton = this.activateButton.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setInputData = this.setInputData.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearAllCompleted = this.clearAllCompleted.bind(this);
        this.allFilter = this.allFilter.bind(this);
        this.completedFilter = this.completedFilter.bind(this);
        this.activeFilter = this.activeFilter.bind(this);
        this.selectAllItems = this.selectAllItems.bind(this);
    }

    /*----------Local methods----------------*/

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
        if(e.keyCode === 13) {
            this.activateButton();
        }
    }
    getRandomColor(objArray){
        const randomIndex = Math.trunc(Math.random()*objArray.length);
        return objArray[randomIndex].color;
    }
    generateID(){
        return `f${(Math.floor(Math.random()*1e8)).toString(16)}`;
    }
    handleAddItem(data, color) {
        const newItem = {
            id: this.generateID(),
            data,
            originalColor: color,
            completed: false,
            visible: true,
        };
        this.setState({...this.state, items:[...this.state.items, newItem]});
    }

    /*----------Task Container----------------*/

    changeCheckBoxState(id) {
        const items = [...this.state.items];
        const item = items.find((item) => item.id === id);
        item.completed = !item.completed;
        this.setState({...this.state, items})
    }
    deleteItem(id){
        const items = [...this.state.items];
        const index = items.indexOf(items.find(item=>item.id===id));
        items.splice(index, 1);
        this.setState({...this.state, items});
    }

    /*-------------Add Panel------------------*/

    setInputData(data){
        this.setState({
            input: {
                data,
                isClear: false,
            }
        });
    }
    selectColor(id) {
        const colors = [...this.state.colors].map(color => {
                const isActive = color.id === id;
                return {
                    ...color,
                    active: !color.active&&isActive
                }
        });
        this.setState({...this.state, colors})
    }
    activateButton(){
        const activeColor = [...this.state.colors]
            .find(color => color.active===true);
        const color = activeColor ?
            activeColor.color
            // : this.getRandomColor([...this.state.colors])
            : 'transparent';
        const data = this.state.input.data;
        if (data){
            this.handleAddItem(data, color);
            this.setState({
                input:{
                    data: '',
                    isClear: true,
                }
            })
        }
    }
    selectAllItems(checked){
        console.log("1: ", checked);
        const items = [...this.state.items];
        items.forEach(item=>item.completed=checked);
        this.setState({...this.state, items});
    }

    /*-------------Control Panel---------------*/

    clearAllCompleted(){
        const items = [...this.state.items];
        for (let i = 0; i < items.length; i++){
            if (items[i].completed) {
                items.splice(i, 1);
                i--;
            }
        }
        this.setState({...this.state, items});
    }
    allFilter(){
        const buttons = [...this.state.controlButtons]
        const items = [...this.state.items];
        items.forEach((item)=>item.visible=true);
        buttons[0].selected = true;
        buttons[1].selected = false;
        buttons[2].selected = false;
        this.setState({...this.state, items, buttons});
    }
    activeFilter(){
        const items = [...this.state.items];
        items.forEach((item)=> {
            item.visible = !item.completed;
        });
        const buttons = [...this.state.controlButtons]
        buttons[1].selected = true;
        buttons[0].selected = false;
        buttons[2].selected = false;
        this.setState({...this.state, items, buttons});
    }
    completedFilter(){
        const items = [...this.state.items];
        items.forEach((item)=> {
            item.visible = item.completed;
        });
        const buttons = [...this.state.controlButtons]
        buttons[2].selected = true;
        buttons[0].selected = false;
        buttons[1].selected = false;
        this.setState({...this.state, items, buttons});
    }

    /*---------------Render--------------------*/

    render(){
        const completedItems = [...this.state.items].filter(item => item.completed);
        const allItems = [...this.state.items];

        return (
            <div className="outer-box">
                <p>todos</p>
                <div className="container">
                    <AddPanel
                        colorSet={this.state.colors}
                        input={this.state.input}
                        selectColor={this.selectColor}
                        setInputData={this.setInputData}
                        addItem={this.activateButton}
                        selectAll={this.selectAllItems}
                        completedItemsCount={completedItems.length}
                        itemCount={allItems.length}

                    />
                    <TaskContainer
                        items={this.state.items}
                        onChange={this.changeCheckBoxState}
                        deleteItem={this.deleteItem}
                    />

                    <ControlPanel
                        inCompletedItemsCount={allItems.length - completedItems.length}
                        itemCount={allItems.length}
                        clearAllCompleted={this.clearAllCompleted}
                        allFilter={this.allFilter}
                        activeFilter={this.activeFilter}
                        completedFilter={this.completedFilter}
                        buttons={this.state.controlButtons}
                    />
                </div>
            </div>

        );
    }
}

export default Container;