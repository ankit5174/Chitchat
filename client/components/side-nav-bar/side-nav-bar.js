import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './side-nav-bar.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

export default class SideNavBar extends Component {

    constructor() {
        super();
        this.toggleSideNavBar = this.toggleSideNavBar.bind(this);
    }

    toggleSideNavBar() {
        this.props.toggleSideNavBar();
    }

    getOnlineUserComponent(userId, name) {
        return (
            <li>
                <div className="user">
                    <span className="name">{name}</span><br/>
                    <span className="user-id">{userId}</span>
                </div>
            </li>
        );
    }

    render() {
        let {user, sideNavBarOpen, onlineUsers} = this.props;
        let sidebarClass = sideNavBarOpen ? 'sidebar' : 'sidebar active';
        return (
            <nav className={sidebarClass}>
                <a onClick={this.toggleSideNavBar} className="sidebar-toggle-button">{sideNavBarOpen ?
                    <i className="fa fa-hand-point-left"/> : <i className="fa fa-hand-point-right"/>}</a>
                <div className="sidebar-header text-center">
                    {/*{user.photoURL ? <img alt="profile" src={user.photoURL} className="img-circle" width="100" height="100"/> :*/}
                        {/*<img alt="profile" src={PorfilePlaceholder} className="img-circle" width="100" height="100"/>}*/}
                    <h6 className="pt-4">{user.name}</h6>
                </div>

                <ul className="list-unstyled components">
                    {Object.keys(onlineUsers).map((key)=>{
                        return this.getOnlineUserComponent(key, onlineUsers[key]);
                    })}
                </ul>

            </nav>
        );
    }
}

SideNavBar.propTypes = {
    user: PropTypes.object,
    sideNavBarOpen: PropTypes.bool,
    toggleSideNavBar: PropTypes.func,
    onlineUsers: PropTypes.object
}

