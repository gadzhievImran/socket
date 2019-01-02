import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import './assets/css/style.sass';

import Root from './components/Root';
import configureStore from './config/configureStore';
const store = configureStore();

import { messageAction } from './logic/actions/messageActions';
import { headerTitleChangeAction } from './logic/actions/appActions';

const ws = new WebSocket('ws://185.43.5.35:8080');
ws.onopen = () => {
    console.log('ONLINE');
};

ws.onclose = () => {
    console.log('DICONNECTED');
};

ws.onmessage = response => {
    store.dispatch(messageAction(response.data));
};

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

