import React, {Component} from 'React';
import PropTypes from 'prop-types';
import TextareAutosize from 'react-autosize-textarea';
import RecentChats from '../recent-chats/recent-chats';
import ChatMessage from '../chat-message/chat-message';
import './chat-window.css';
import {actionTypes} from "../../redux/chat/chat-actions";
import {utils} from "../../util/util";


export default class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onMessageInputKeyDown = this.onMessageInputKeyDown.bind(this);
    }

    // componentDidMount() {
    //     this.scrollToBottom();
    // }
    //
    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }

    scrollToBottom() {
        //this.chatMessagesDiv.scrollIntoView({ behavior: 'smooth' });
    }

    handleChange(event) {
        this.setState({
            textMessage: event.target.value
        })
    }



    onMessageInputKeyDown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            if (this.state.textMessage.trim() !== '') {
                let {user, chattingTo} = this.props;
                this.props.emitEvent(actionTypes.SEND_NEW_MESSAGE, utils.getMessagePacket(user, chattingTo, this.state.textMessage));
                this.props.sendNewMessage(utils.getMessagePacket(user, chattingTo, this.state.textMessage));
                this.messageInputTextArea.value = '';
                this.setState({textMessage: ''});
                event.preventDefault();
            } else {
                event.preventDefault();
            }
        }
    }

    render() {
        let {
            recentChats,
            chattingTo
        } = this.props;
        console.log('ct'+chattingTo);
        return (
            <div className="chat-window-conatiner">
                <div className="recent-chats">
                    <RecentChats/>
                </div>
                <div ref={(ref) => {this.chatMessagesDiv = ref}} className="chat-messages">
                    {recentChats[chattingTo] && recentChats[chattingTo].messages && recentChats[chattingTo].messages.map((message) => {
                        return (<ChatMessage message={message}/>);
                    })}
                </div>
                <div className="chat-input-message">
                    <TextareAutosize
                        innerRef={ref => this.messageInputTextArea = ref}
                        onChange={this.handleChange}
                        onKeyDown={this.onMessageInputKeyDown}
                        placeholder="Type a message"
                        style={{
                            resize: 'none',
                            width: "100%",
                            marginRight: 25,
                            maxHeight: 100,
                            padding: 5
                        }}
                        theme={{
                            textarea: {
                                fontSize: '18px',
                            }
                        }}
                    />
                    <span><i className="fas fa-paper-plane"/></span>
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    user: PropTypes.object,
    chattingTo: PropTypes.string,
    recentChats: PropTypes.object,
    sendNewMessage: PropTypes.func
};

