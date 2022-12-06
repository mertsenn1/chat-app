import React, { useContext } from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from '../components/Messages';
import Input from '../components/Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);
    console.log("data: ", data);

    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span className='chatguy'>{data && data.user.displayName}</span>
            </div>
            <Messages />
            <Input />
        </div>

    )
}

export default Chat;