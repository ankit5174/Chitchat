import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from 'mdbreact';
import './login-page.css';

export default class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            displayComponent: 'sign-in'
        }
    }

    getDisplayComponent() {
        if (this.state.displayComponent === 'sign-in') {
            return (
                <div>
                    <form onSubmit={
                        (event) => {
                            let target = event.target;
                            this.props.loginWithPassword(target.email.value, target.password.value);
                            event.preventDefault();
                        }}
                    >
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            group type="email"
                            validate error="wrong"
                            success="right"
                        />
                        <Input
                            id="password"
                            name="password"
                            label="Password"
                            group
                            type="password"
                            validate/>
                        <div className="mb-4 button-forgot-password">
                            <a onClick={()=>{
                                this.setState({displayComponent: 'forgot-password'})
                            }}>Forgot Password</a>
                        </div>
                        <div className="text-center ">
                            <Button block type="Submit">Login</Button>
                        </div>
                    </form>
                    <p className="mt-5 grey-text text-center">or sign in using</p>
                    <Button className="button-gplus"
                            onClick={() => {
                                this.props.loginWithGoogle();
                            }}>
                        <i className="fab fa-google-plus-g pr-2"/>
                        Google +
                    </Button>
                </div>
            );
        } else if(this.state.displayComponent === 'sign-up') {
            return (
                <div>
                    <form onSubmit={
                        (event) => {
                            let target = event.target;
                            this.props.createUser(target.email.value, target.password.value);
                            event.preventDefault();
                        }}
                    >
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            group type="email"
                            validate error="wrong"
                            success="right"
                        />
                        <Input
                            id="password"
                            name="password"
                            label="Password"
                            group
                            type="password"
                            validate/>
                        <div className="text-center ">
                            <Button block type="Submit">Sign Up</Button>
                        </div>
                    </form>
                </div>
            );
        } else if(this.state.displayComponent === 'forgot-password') {
            return (
                <div>
                    <form onSubmit={
                        (event) => {
                            let target = event.target;
                            this.props.sendResetPasswordMail(target.email.value);
                            event.preventDefault();
                        }}
                    >
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            group type="email"
                            validate error="wrong"
                            success="right"
                        />
                        <div className="text-center ">
                            <Button block type="Submit">Reset Pasword</Button>
                        </div>
                    </form>
                </div>
            );
        }
    }

    render() {

        let displayComponent= this.getDisplayComponent();

        return (
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <div className="login-form text-center">
                            <div className="button-signup">
                                <a onClick={() => {
                                    if (this.state.displayComponent === 'sign-in') {
                                        this.setState({displayComponent: 'sign-up'})
                                    } else {
                                        this.setState({displayComponent: 'sign-in'})
                                    }
                                    this.props.clearAuthentication();
                                    }} className="navbar-text text-dark">
                                    {this.state.displayComponent === 'sign-in' ? 'SIGN UP' : <i className="fas fa-arrow-left"/>}
                                </a>
                            </div>

                            <h2 className="mb-5 text-center">Track Live</h2>
                            {this.props.errorCode && <p className="red-text">{this.props.errorMessage}</p>}
                            {this.props.messageCode && <p className="red-text">{this.props.message}</p>}
                            {displayComponent}
                        </div>
                        <div className="login-image"/>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    createUser: PropTypes.func,
    clearAuthentication: PropTypes.func,
    loginWithPassword: PropTypes.func,
    loginWithGoogle: PropTypes.func,
    messageCode: PropTypes.string,
    message: PropTypes.string,
    errorCode: PropTypes.string,
    errorMessage: PropTypes.string,
    sendResetPasswordMail: PropTypes.func
};