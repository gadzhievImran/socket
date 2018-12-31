import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import AppReducer from '../logic/reducers';
import UserMiddleware from '../logic/middlewares/';
import RootMiddleware from '../logic/middlewares/beforeApiMiddleware';

export default () => {
    const store = createStore(
        AppReducer,
        applyMiddleware(
            thunk,
            ...UserMiddleware,
            apiMiddleware,
            ...RootMiddleware
        )
    );

    return store;
}
