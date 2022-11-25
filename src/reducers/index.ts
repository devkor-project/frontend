import { combineReducers } from 'redux';
import { tokenReducer } from './auth';

const rootReducer = combineReducers({
  tokenReducer,
});

export default rootReducer;
