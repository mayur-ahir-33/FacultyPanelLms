import React, { Component } from 'react'

import 'react-chat-elements/dist/main.css'
// import { ChatItem } from 'react-chat-elements'
import { ChatList, MessageList, MessageBox } from 'react-chat-elements';

export class MessengerChat extends Component {
    render() {

        const messages = [
                {
                    position: 'right',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                },
                {
                    position: 'left',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                },
        ]; 
        return (
            <div>
                <div className="float-left" style={{ 'width': '300px' }}>
                    <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                                avatar: 'https://facebook.github.io/react/img/logo.svg',
                                alt: 'Reactjs',
                                title: 'Mayur',
                                subtitle: 'What are you doing?',
                                date: new Date(),
                                unread: 0,
                            },
                            {
                                avatar: 'https://facebook.github.io/react/img/logo.svg',
                                alt: 'Reactjs',
                                title: 'Facebook',
                                subtitle: 'What are you doing?',
                                date: new Date(),
                                unread: 5,
                            },
                        ]} />
                </div>

                <div className="float-left ml-2" style={{ 'width': '900px'}}>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={messages} />
                </div>

            </div>
        );
    }
}

export default MessengerChat
