import { ADD_TODO,
         TOGGLE_TODO,
         DELETE_TODO,
         TOGGLE_ALL,
         DELETE_COMPLETED,
         SET_TODOS_FROM_SERVER
} from "../constants/actionTypes";

export default function todos(state = [], action) {
    const areAllMarked = state.every(todo => todo.completed);
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    originalColor: action.payload.color,
                    completed: false,
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                } else
                return todo;
            });
        case TOGGLE_ALL:
            return state.map((todo) => {
                return {...todo, completed: !areAllMarked};
            });
        case DELETE_TODO:
            return state.filter((todo) =>
                todo.id !== action.payload.id);
        case DELETE_COMPLETED:
            return state.filter(todo => todo.completed === false);
        case SET_TODOS_FROM_SERVER:
            return action.payload.todos.map(todo => ({
                    id: todo.id,
                    text: todo.data,
                    originalColor: todo.originalColor,
                    completed: todo.completed,
                }));
        default:
            return state;
    }
}