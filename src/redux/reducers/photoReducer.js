const initialState = {
    photo: [],
    isPhotoLoading: false
}

export const photoReducer = (state = initialState, action) =>{
switch (action.type){
    case 'START_PHOTO_LOADING':{
        return {
            ...state,
            isPhotoLoading: true
        }
    }
    case 'STOP_PHOTO_LOADING':{
        return {
            ...state,
            isPhotoLoading: false
        }
    }
    case 'SET_PHOTO':{
        return {
            ...state,
            photo: action.payload
        }
    }
    default: return state
}
}