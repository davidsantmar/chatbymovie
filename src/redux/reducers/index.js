import { combineReducers } from 'redux';
import movieDataReducer from './movieDataReducer';

const rootReducer = combineReducers ({
    movies: movieDataReducer
})

export default rootReducer;