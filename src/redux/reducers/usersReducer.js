const initialState = {
    users: [],
    isUserLoading: false
}

export const usersReducer = (state = initialState, action) =>{
switch (action.type){
    case 'START_USER_LOADING':{
        return {
            ...state,
            isUserLoading: true
        }
    }
    case 'STOP_USER_LOADING':{
        return {
            ...state,
            isUserLoading: false
        }
    }
    case 'SET_USER':{
        return {
            ...state,
            users: action.payload
        }
    }
    default: return state
}
}