import { ADD_TODO,
         TOGGLE_TODO,
         DELETE_TODO,
         TOGGLE_ALL,
         DELETE_COMPLETED} from '../constants/actionTypes'

function generateID() {
    return `f${(Math.floor(Math.random()*1e8)).toString(16)}`;
}

export default function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: generateID(),
                    text: action.payload.text,
                    originalColor: action.payload.color,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id){
                    return { ...todo, completed: !todo.completed }
                } else
                return todo
            })
        case TOGGLE_ALL:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map((todo) => {
                return {...todo, completed: !areAllMarked}
            })
        case DELETE_TODO:
            return state.filter((todo) =>
                todo.id !== action.payload.id)
        case DELETE_COMPLETED:
            return state.filter(todo => todo.completed === false)
        default:
            return state
    }
}