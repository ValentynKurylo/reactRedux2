const initialState = {
    comments: [],
    isCommentsLoading: false
}

export const commentsReducer = (state = initialState, action) =>{
switch (action.type){
    case 'START_COMMENTS_LOADING':{
        return {
            ...state,
            isCommentsLoading: true
        }
    }
    case 'STOP_COMMENTS_LOADING':{
        return {
            ...state,
            isCommentsLoading: false
        }
    }
    case 'SET_COMMENTS':{
        return {
            ...state,
            comments: action.payload
        }
    }
    default: return state
}
}