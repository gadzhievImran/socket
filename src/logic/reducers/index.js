import { combineReducers } from 'redux';

import appReducer from './appReducer'
import messageReducer from './messageReducer';

const AppReducer = combineReducers({
    appReducer,
    messageReducer
});

export default AppReducer;
