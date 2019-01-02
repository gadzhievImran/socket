import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import AppReducer from '../logic/reducers';

export default () => {
    const store = createStore(
            AppReducer,
        applyMiddleware(
            thunk,
            apiMiddleware
        )
    );
    return store;
};
