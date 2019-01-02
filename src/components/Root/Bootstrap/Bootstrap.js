import React, { Component } from 'react';
import {PAGE_SIGNIN} from "../../../config/links";

export default class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenChecked: null
        }
    }

    componentDidMount() {
        const { cookies } = this.props;
        if(cookies.get('token')) {
            this.setState({ tokenChecked: true })
        }else {
            this.props.history.push(PAGE_SIGNIN);
        }
    }

    render() {
        return this.props.children;
    }
}
