import React, { Component } from 'react';
import axios from 'axios';

// const ws = new WebSocket('ws://185.43.5.35:8080');

const ws = new WebSocket('ws://0.0.0.0:8080');

import '../../../assets/css/pages/messages.sass';
import '../../../assets/css/awesome.sass';

export default class MessagesPage extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            message: '',
            heightPage: 0,
            items: null,
            oldMessage: '',
            isEdit: false
        };
    };

    componentDidMount() {
        this.props.headerTitleChangeAction('Imr');
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
                message: message,
                hasInput: false
            }).then(response => {
            }).catch(e => console.error(e));
        });
    };

    handleChange = event => {
        this.setState({ message: event.target.value })
    };

    handleRemove = message => {
        axios.delete('http://localhost:3000/remove', {
            data: { message }
        }).then(response => {
            const m = response.data.value;
            if(m) {
                this.setState(state => {
                    let { items } = state;
                    items = items.filter(item => item.message !== message);
                    return { items };
                })
            }
        }).catch(e => console.log(e));
    };

    handleEdit = index => {
        this.setState(state => {
            let { items, oldMessage } = state;
            oldMessage = items[index].message;
            const finded = items.find((item, i) => index === i);
            // finded.hasInput = !finded.hasInput;
            finded.hasInput = true;
            items.forEach((item, i) => {
                if(item.message === finded.message) {
                    item.hasInput = finded.hasInput;
                }
            });
            return {
                items, oldMessage
            }
        });
    };

    handlechangeItem = (index, value) => {
      this.setState(state => {
        let items = [...state.items];
        const isEdit = state.isEdit;
        let oldMessage = state.oldMessage;
        if(!isEdit) {
          oldMessage = state.items[index].message;
        }
        
        console.log('oldMessage', oldMessage);
        items.map((item, i) => {
          if(index === i) {
              item.message = value;
          }
          return item;
        });

        return { items, oldMessage, isEdit: true };
      });
    };

    handleBlur = index => {
        this.setState(state => {
            const { items } = state;
            const finded = items.find((item, i) => index === i);
            finded.hasInput = !finded.hasInput;
            items.forEach((item, i) => {
                if(item.message === finded.message) {
                    item.hasInput = finded.hasInput;
                }
            });
            return {
                items
            }
        }, () => {
            const { items, oldMessage } = this.state;
            const finded = items.find((item, i) => index === i);
            const { message } = finded;
            axios.put('http://localhost:3000/update', {
                data: { oldMessage, message }
            }).then(response => console.log(response.data))
        });
    };

    render() {
        const { message, items } = this.state;
        const { messages } = this.props;
        // console.log('state', this.state);
        console.log('items', items);
        console.log('messages', messages);
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
                                    return (
                                        <li
                                            key={index}
                                        >
                                            <span>
                                                <i
                                                    onClick={() => {
                                                        this.handleEdit(index)
                                                    }}
                                                    className="far fa-edit"
                                                >
                                                </i>
                                                <i
                                                    onClick={() => {
                                                        this.handleRemove(item.message);
                                                    }}
                                                    className="fas fa-trash-alt"
                                                >
                                                </i>
                                                {
                                                    !item.hasInput ? item.message :
                                                        <input
                                                            value={item.message}
                                                            // ref={this.textInput}
                                                            className="input__message"
                                                            autoFocus
                                                            onChange={event => {
                                                                this.handlechangeItem(index, event.target.value);
                                                            }}
                                                            onBlur={() => {
                                                                this.handleBlur(index);
                                                            }}
                                                        />
                                                }
                                            </span>
                                        </li>
                                    )
                                }) : ''
                            }
                            {
                              messages.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                  >
                                    <span>
                                      <i
                                        onClick={this.handleEdit}
                                        // onBlur={() => {
                                        //     this.handleBlur(index);
                                        // }}
                                        className="far fa-edit"
                                      >
                                      </i>
                                      <i
                                        onClick={this.handleRemove}
                                        className="fas fa-trash-alt"
                                      >
                                      </i>{item}
                                    </span>
                                  </li>
                                )
                              })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
