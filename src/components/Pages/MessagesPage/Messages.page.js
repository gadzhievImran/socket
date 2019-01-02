import React, { Component } from 'react';

const ws = new WebSocket('ws://185.43.5.35:8080');

import '../../../assets/css/pages/messages.sass';

export default class MessagesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            items: []
        };
    };

    componentDidMount() {
        this.props.headerTitleChangeAction('IS');
        // this.state.
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    handleSubmit = event => {
        const { message } = this.state;
        event.preventDefault();
        this.setState({ message: '' }, () => {
            ws.send(message);
        })
    };

    handleChange = event => {
        this.setState({ message: event.target.value })
    };

    render() {
        // const { message, items } = this.state;
        const { messages } = this.props;
        console.log(messages)
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
                                // value={message}
                            />
                        </div>
                        <div className="wrapper-item">
                            <button className="button" type="submit"> | > </button>
                        </div>

                    </form>
                    <div className="messages">
                        <ul>
                            {
                                messages.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })
                            }
                            {/*{*/}
                                {/*message.map((item, index) => {*/}
                                    {/*return <li key={index}>{item}</li>*/}
                                {/*})*/}
                            {/*}*/}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
