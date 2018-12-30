import React, { Component } from 'react';
import { Cookies } from 'react-cookie';
import '../../../assets/css/pages/signin.sass';

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
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
        cookies.set('token', '1234567890qwertyuiop');
    };

    render() {
        return (
            <div id="page__signin">
                <h1>Sign in</h1>
                <form>
                    <div className="wrapper-item">
                        <div className="title">Email</div>
                        <input
                            className="input__text"
                            type="text"
                            name="email"
                            onChange={this.handleChangeUserData}
                            placeholder="email"
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
