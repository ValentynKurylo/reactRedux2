const initialState = {
    albums: [],
    isAlbumsLoading: false
}

export const albumsReducer = (state = initialState, action) =>{
switch (action.type){
    case 'START_ALBUMS_LOADING':{
        return {
            ...state,
            isAlbumsLoading: true
        }
    }
    case 'STOP_ALBUMS_LOADING':{
        return {
            ...state,
            isAlbumsLoading: false
        }
    }
    case 'SET_ALBUMS':{
        return {
            ...state,
            albums: action.payload
        }
    }
    default: return state
}
}