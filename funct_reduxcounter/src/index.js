import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reducer from './Reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(Reducer);
root.render(
  <Provider store={store}>

<App />
    </Provider>

);


reportWebVitals();
