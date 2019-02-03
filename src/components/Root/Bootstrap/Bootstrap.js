import React, { Component } from 'react';
import axios from 'axios';

import {PAGE_SIGNIN} from "../../../config/links";

import SignIn from '../../Pages/SignInPage';

export default class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenChecked: null,
            user: null
        }
    }

    componentDidMount() {
        const { cookies } = this.props;
        // here have to request getUserInfo();
        // recognize data of user according to token
        if(cookies.get('token')) {
            this.setState({ tokenChecked: true }, () => {
                axios.post('http://localhost:3000/userinfo', {
                    token: cookies.get('token')
                }).then(response => {
                    this.props.userInfoAction(response.data)
                }).catch(e => {
                    console.log(e);
                })
            })
        }else {
            this.props.history.push(PAGE_SIGNIN);
        }
    }

    render() {
        const { tokenChecked } = this.state;
        if(tokenChecked) {
            return this.props.children;
        }

        return this.props.children
    }
}
