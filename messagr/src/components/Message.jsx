import React, { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = (props) => {
    
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    React.useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [props.message]);

    return (
        <div ref={ref} className={`message ${props.message.senderId === currentUser.uid && "owner"}`}>
            <div className='messageInfo'>
                <img src={props.message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt=''/>
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>{props.message.text}</p>
            </div>
        </div>

    )
}

export default Message;