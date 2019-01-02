import React, { Component } from 'react';
import {PAGE_SIGNIN} from "../../../config/links";

import SignIn from '../../Pages/SignInPage';

export default class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenChecked: null
        }
    }

    componentDidMount() {
        const { cookies } = this.props;

        // here have to request getUserInfo();
        // recognize data of user according to token
        if(cookies.get('token')) {
            this.setState({ tokenChecked: true })
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
