import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import Loading from '../../components/loading/loading';
import SideNavBar from '../../components/side-nav-bar/side-nav-bar';
import './base-page.css';
import {actionTypes} from "../../redux/chat/chat-actions";
import ChatWindow from '../../components/chat-window/chat-window-container';

export default class BasePage extends Component {

    constructor() {
        super();
        this.state = {
            sideNavBarOpen: true
        };
        this.toggleSideNavBar = this.toggleSideNavBar.bind(this);
    }

    componentDidMount() {
        this.props.goOnline();
        this.props.emitEvent(actionTypes.GET_ONLINE_USERS);
        this.props.registerEvent(actionTypes.GET_ONLINE_USERS_SUCCESS);
        this.props.registerEvent(actionTypes.USER_DISCONNECTED);
        this.props.registerEvent(actionTypes.NEW_USER_CONNECTED);
        this.props.registerEvent(actionTypes.NEW_MESSAGE_RECEIVED);
    }

    toggleSideNavBar() {
        this.setState((prevState, props) => ({
            sideNavBarOpen: !prevState.sideNavBarOpen
        }));
    }

    render() {
        let {
            user,
            loading,
            onlineUsers,
            setChattingTo
        } = this.props;

        return (
            <div className="wrapper">
                <div className="Container">
                    <SideNavBar sideNavBarOpen={this.state.sideNavBarOpen}
                                toggleSideNavBar={this.toggleSideNavBar}
                                user={user}
                                onlineUsers={onlineUsers}
                                setChattingTo={setChattingTo}/>
                    <div className="Middle">
                        <ChatWindow/>
                    </div>
                </div>
            </div>
        );
    }
}

BasePage.propTypes = {
    loading: PropTypes.bool,
    onlineUsers: PropTypes.object,
    goOnline: PropTypes.func,
    emitEvent: PropTypes.func,
    registerEvent: PropTypes.func,
    setChattingTo: PropTypes.func
};