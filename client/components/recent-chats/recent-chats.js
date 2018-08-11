import React, {Component} from 'React';
import Popup from "reactjs-popup";
import './recent-chats.css'


export default class RecentChats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showRecentChats: false
        };
        this.toggleShowRecentChats = this.toggleShowRecentChats.bind(this);
    }

    toggleShowRecentChats() {
        this.setState({
            showRecentChats: !this.state.showRecentChats
        });
    }

    render() {
        return (
            <Popup trigger={<i className="fa-3x fas fa-comment"/>} position="left top">
                <p>Ankit</p>
            </Popup>
        );
    }
}