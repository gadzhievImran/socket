import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import AppReducer from '../logic/reducers';
import UserMiddleware from '../logic/middlewares/';
import RootMiddleware from '../logic/middlewares/beforeApiMiddleware';

export default () => {
    const store = createStore(
        AppReducer,
        applyMiddleware(
            ...UserMiddleware,
            apiMiddleware,
            ...RootMiddleware
        )
    );

    return store;
}
