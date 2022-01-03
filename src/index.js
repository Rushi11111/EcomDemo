import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {PersistGate, persistGate} from 'redux-persist/integration/react';
import {store, persistor} from "./redux/store"
import './index.css';
import App from './App';
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <PersistGate persistor = {persistor}>
            <App />
          </PersistGate>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
