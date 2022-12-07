import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './store';
import './index.css';
// import { rootReducer } from './reducers';
import './styles/global.css';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import { BASE__URL } from './constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
axios.defaults.baseURL = BASE__URL;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
