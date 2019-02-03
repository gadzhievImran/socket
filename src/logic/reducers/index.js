import { combineReducers } from 'redux';

import appReducer from './appReducer'
import messageReducer from './messageReducer';
import userReducer from './userReducer';

const AppReducer = combineReducers({
    appReducer,
    messageReducer, 
    userReducer
});

export default AppReducer;
