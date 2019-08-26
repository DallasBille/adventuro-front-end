import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./Redux/reducers/userReducer";
import adventureReducer from "./Redux/reducers/adventureReducer";
import donationReducer from "./Redux/reducers/donationReducer";
import toggleReducer from "./Redux/reducers/toggleReducer";
import errorsReducer from "./Redux/reducers/errorsReducer";
import filterReducer from "./Redux/reducers/filterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  user: userReducer,
  adventures: adventureReducer,
  donations: donationReducer,
  toggle: toggleReducer,
  errors: errorsReducer,
  filter: filterReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
