import { combineReducers } from 'redux';
import movieDataReducer from './movieDataReducer';
import authReducer from "./authReducer";
import messagesReducer from './messagesReducer';
import movieSelectedReducer from './movieSelectedReducer';


const rootReducer = combineReducers ({
    movies: movieDataReducer,
    auth: authReducer,
    messages: messagesReducer,
    movieSelected: movieSelectedReducer
})

export default rootReducer;