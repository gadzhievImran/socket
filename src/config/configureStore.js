import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

// import AppReducer from '../logic/reducers';
// import appReducer from '../logic/reducers';

import appMiddlewares from '../logic/middlewares';
import beforeApiMiddleware from '../logic/middlewares/beforeApiMiddleware';

import appReducer from '../logic/reducers/appReducer';
import messageReducer from '../logic/reducers/messageReducer';

export default () => {
    const store = createStore(
        combineReducers({
                appReducer,
                messageReducer
        })
        // appReducer
    );
    return store;
};
