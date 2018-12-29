import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/style.sass';
import s from './assets/images/love.png';
import MainPage from "./components/Pages/MainPage/Main.page";

const image = document.createElement('img');
image.src = s;
document.body.appendChild(image);

const user = {
    name: 'Imran',
    age: 27
};

const user2 = {...user};

console.log(user2);

ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);
