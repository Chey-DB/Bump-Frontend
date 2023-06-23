import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
// import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";


import calendarReducer from '../reducers/calendarReducer';
import serviceChangeReducer from '../reducers/serviceChangeReducer';


const reducer = combineReducers({
    calendarState: calendarReducer,
    eventState: serviceChangeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;
