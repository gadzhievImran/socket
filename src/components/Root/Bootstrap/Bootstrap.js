import React, { Component } from 'react';

export default class Bootstrap extends Component {
    componentDidMount() {
        console.log('Bootstrap', this.props)
    }
    render() {
        return this.props.children;
    }
}
