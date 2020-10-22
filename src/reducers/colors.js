import {SELECT_COLOR} from "../constants/actionTypes";
const initial_state = [
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
]
export default function colors(state = initial_state, action) {
    switch (action.type){
        case SELECT_COLOR:
            return state.map(color => {
                if (color.id === action.payload.id){
                    return {...color, active: !color.active}
                }
                return {...color, active: false}
            })
        default:
            return state
    }
}