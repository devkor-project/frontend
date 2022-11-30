import { combineReducers } from 'redux';
import { tokenReducer } from './auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  tokenReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

