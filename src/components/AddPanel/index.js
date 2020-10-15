import React from "react";
import TextField from "../TextField/index";
import ColorsAndButton from "../ColorsAndButon";
import './styles.css'


function AddPanel(props) {
    const { input, colorSet, selectColor,
            setInputData, addItem, selectAll,
            completedItemsCount, itemCount} = props;
    const check = itemCount > completedItemsCount;
    const selectAllButtonStyle = !check ? {color: "#000000"} : {color: "#757575"};
    if (!itemCount){
        selectAllButtonStyle.color = 'transparent';
        selectAllButtonStyle.cursor = 'default';
    }
    console.log("2: ", check);
    return(
        <div className="add-panel">
            <div className="all-checks">
                <button onClick={()=>selectAll(check)}
                        style={selectAllButtonStyle}>
                    ❯
                </button>
            </div>
            <TextField
               isClear={input.isClear}
               setInputData={setInputData}
            />
            <ColorsAndButton
                colorSet={colorSet}
                selectColor={selectColor}
                addItem={addItem}
            />
        </div>
    )
}

export default AddPanel;
