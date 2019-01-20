import React, { Component } from 'react';
import axios from 'axios';

// const ws = new WebSocket('ws://185.43.5.35:8080');

const ws = new WebSocket('ws://0.0.0.0:8080');

import '../../../assets/css/pages/messages.sass';

export default class MessagesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            heightPage: 0,
            items: null
        };
    };

    componentDidMount() {
        this.props.headerTitleChangeAction('IS');
        // const ul = document.getElementById('ul');
        const ul = document.querySelector('.messages');
        const html_height = document.documentElement.clientHeight;
        const page__header_height = document.querySelector('.page__header').clientHeight;
        const page_height = document.querySelector('.page').clientHeight;
        // const
        ul.style.height = `${html_height - (page__header_height + page_height ) + 45}px`;
        axios.get('http://localhost:3000/api/messages').then(response => {
            this.setState({ items: response.data });
        });
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    handleSubmit = event => {
        const { message } = this.state;
        event.preventDefault();
        this.setState(state => {
            ws.send(message);
            return { message: '' };
        }, () => {
            axios.post('http://localhost:3000/messages', {
                message: message
            }).then(response => {
                console.log('response', response.data);
            }).catch(e => console.error(e));
        });
    };

    handleChange = event => {
        this.setState({ message: event.target.value })
    };

    render() {
        const { message, items } = this.state;
        const { messages } = this.props;
        return (
            <div className="page">
                <div id="page__messages">
                    <form
                        onSubmit={event => {
                            this.handleSubmit(event)
                        }}>
                        <div className="wrapper-item">
                            <input
                                className="input__text"
                                type="text"
                                required
                                autoFocus
                                placeholder="Write message"
                                onChange={event => {
                                    this.handleChange(event)
                                }}
                                value={message}
                            />
                        </div>
                        <div className="wrapper-item">
                            <button className="button" type="submit"> | > </button>
                        </div>

                    </form>
                    <div className="messages">
                        <ul id="ul">
                            {
                                items ? items.map((item, index) => {
                                    return <li key={index}>{item.message}</li>
                                }) : ''
                            }
                            {
                                messages.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
