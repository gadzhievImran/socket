import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import axios from 'axios';

import './assets/css/style.sass';

import Root from './components/Root';
import configureStore from './config/configureStore';
const store = configureStore();

import { messageAction } from './logic/actions/messageActions';
import {PAGE_MAIN} from "./config/links";

const ws = new WebSocket('ws://185.43.5.35:8080');

ws.onopen = () => {
    console.log('ONLINE');
};

ws.onclose = () => {
    console.log('DICONNECTED');
};

ws.onmessage = response => {
    store.dispatch(messageAction(response.data));
    console.log('i here')

    axios.post('http://localhost:3000/messages', {
        message: response.data
    }).then(response => {
        console.log('response', response);
    }).catch(error => {
        console.error('Enter correct your password or name.', error);
    });
    // here have to request for messages
};

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

