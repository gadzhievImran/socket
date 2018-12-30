import React, { Component } from 'react';

import Menu from './Menu';
import Header from './Header';

export default class AppTemplate extends Component {
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <Menu {...this.props}  />
                {this.props.children}
            </React.Fragment>
        )
    }
}
