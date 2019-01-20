import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../../assets/css/pages/signin.sass';
import {PAGE_MAIN} from "../../../config/links";

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            name: null,
            token: null
        };
    }

    componentDidMount() {
        // console.log(this.props)
    }

    handleChangeUserData = event => {
        this.setState({ [ event.target.name ]: event.target.value }, () => {
            // console.log(this.state)
        });
    };

    signIn = () => {
        // I have to make request to take token and inline with status I have to continue
        event.preventDefault();
        const { cookies } = this.props;
        const { name, password } = this.state;

        // fetch('/authentication', {
        //     method: 'post',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //         name,
        //         password
        //     })
        // }).then(res => res.json()).then(res => {
        //     console.log('res', res);
        // });

        axios.post('http://localhost:3000/authentication', {
            name,
            password
        }).then(response => {
            this.setState({ token: response.data.payload.token }, () => {
                cookies.set('token', this.state.token);
                this.props.history.push(PAGE_MAIN)
            })
        }).catch(error => {
            console.error('Enter correct your password or name.', error);
        });
    };

    render() {
        console.log('state', this.state);
        return (
            <div id="page__signin">
                <h1>Sign in</h1>
                <form>
                    <div className="wrapper-item">
                        <div className="title">Name</div>
                        <input
                            className="input__text"
                            type="text"
                            name="name"
                            onChange={this.handleChangeUserData}
                            placeholder="name"
                        />
                    </div>
                    <div className="wrapper-item">
                        <div className="title">Password</div>
                        <input
                            className="input__text"
                            type="password"
                            name="password"
                            onChange={this.handleChangeUserData}
                            placeholder="password"
                        />
                    </div>
                    <div className="wrapper-item">
                        <button
                            onClick={this.signIn}
                            className="button"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
