import { combineReducers } from 'redux';
import movieSearchReducer from './containers/movieSearchReducer';
import movieReducer from './containers/MovieList/movieReducer';

const rootReducer = combineReducers({
    //props from components gathered here.
    searchRoot: movieSearchReducer,
    detailsRoot: movieReducer
});

export default rootReducer;