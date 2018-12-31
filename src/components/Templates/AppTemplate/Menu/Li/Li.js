import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Li extends Component {
    render() {
        const { link, text } = this.props;
        return (
            <div>
                <Link to={link}>
                    {text}
                </Link>
            </div>
        )
    }
}
