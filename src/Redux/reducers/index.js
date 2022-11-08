import { combineReducers } from 'redux';
import reducer from './movieReducer';

const rootReducer = combineReducers({
  movieReducer: reducer,
});

export default rootReducer;
