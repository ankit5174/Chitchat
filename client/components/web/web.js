import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SideNavBar from '../side-nav-bar/side-nav-bar';
import './web.css';
import ChatWindow from '../chat-window/chat-window-container';

export default class WebView extends Component {

    constructor() {
        super();
        this.state = {
            sideNavBarOpen: true
        };
        this.toggleSideNavBar = this.toggleSideNavBar.bind(this);
    }

    toggleSideNavBar() {
        this.setState((prevState, props) => ({
            sideNavBarOpen: !prevState.sideNavBarOpen
        }));
    }

    render() {
        let {
            user,
            onlineUsers,
            setChattingTo
        } = this.props;

        return (
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
        );
    }
}

WebView.propTypes = {
    onlineUsers: PropTypes.object,
    setChattingTo: PropTypes.func,
    user: PropTypes.object
};