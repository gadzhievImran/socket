import './assets/css/style.sass';
import s from './assets/images/love.png';

const image = document.createElement('img');
image.src = s;
document.body.appendChild(image);

const user = {
    name: 'Imran',
    age: 27
};

const user2 = {...user};

console.log(user2);
