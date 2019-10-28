import { combineReducers } from 'redux';
import movieSearchReducer from './containers/movieSearchReducer';

const rootReducer = combineReducers({
    //props from components gathered here.
    search: movieSearchReducer
});

export default rootReducer;