const initialState = {
    todos: [],
    isTodosLoading: false
}

export const todosReducer = (state = initialState, action) =>{
switch (action.type){
    case 'START_TODOS_LOADING':{
        return {
            ...state,
            isTodosLoading: true
        }
    }
    case 'STOP_TODOS_LOADING':{
        return {
            ...state,
            isTodosLoading: false
        }
    }
    case 'SET_TODOS':{
        return {
            ...state,
            todos: action.payload
        }
    }
    default: return state
}
}