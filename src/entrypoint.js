import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// const ws = new WebSocket('ws://185.43.5.35:8080');
// ws.onopen = () => {
//     console.log('ONLINE');
// };
//
// ws.onclose = () => {
//     console.log('DICONNECTED');
// };

import './assets/css/style.sass';

import Root from './components/Root';
import configureStore from './config/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
