import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import userReducer from './Redux/reducers/userReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));


// serviceWorker.unregister();
