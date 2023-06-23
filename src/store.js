import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import calendarReducer from './components/Calendar/reducers/calendarReducer';
import serviceChangeReducer from './components/Calendar/reducers/serviceChangeReducer';
import newEntryReducer from './Features/newEntrySlice';

const rootReducer = combineReducers({
  calendarState: calendarReducer,
  eventState: serviceChangeReducer,
  newEntry: newEntryReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;