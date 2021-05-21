import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {commentsReducer} from "./commentsReducer";
import {albumsReducer} from "./albumsReducer";
import {photoReducer} from "./photoReducer";
import {todosReducer} from "./todosReducer";
import {usersReducer} from "./usersReducer";

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    albums: albumsReducer,
    photo: photoReducer,
    todos: todosReducer,
    users: usersReducer
});