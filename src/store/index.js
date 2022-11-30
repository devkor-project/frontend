import { createStore } from 'redux';
import rootReducer from '../reducers';
const store = createStore(rootReducer);
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

export { store, persistor };
