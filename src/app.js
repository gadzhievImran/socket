const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

const ws = new WebSocket('ws://185.43.5.35:8080');

const setState = value => {
    status.innerHTML = value;
};

const printMessage = value => {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
};

ws.onopen = () => {
    setState('ONLINE');
};

ws.onclose = () => {
    setState('DICONNECTED');
};

ws.onmessage = response => {
    printMessage(response.data);
};

form.addEventListener('submit', event => {
    event.preventDefault();
    ws.send(input.value);
    input.value = '';
});
