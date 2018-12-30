import { createStore, applyMiddleware } from 'redux';

import AppReducer from '../logic/reducers';
import UserMiddleware from '../logic/middlewares/';
import RootMiddleware from '../logic/middlewares/beforeApiMiddleware';

export default () => {
    const store = createStore(
        AppReducer,
        applyMiddleware(
            ...UserMiddleware,
            ...RootMiddleware
        )
    );

    return store;
}
