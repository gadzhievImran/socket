import { combineReducers } from 'redux';

import appReducer from './appReducer'
import messageReducer from './messageReducer';

const AppReducer = combineReducers({
    app: appReducer,
    message: messageReducer
});

export default AppReducer;
