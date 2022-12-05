import React, { useContext } from 'react';

import { doc, onSnapshot } from "firebase/firestore";
import Message from '../components/Message';
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Messages = () => {
    const [messages, setMessages] = React.useState([]);
    const { data } = useContext(ChatContext);

    React.useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unSub();
        };
    }, [data.chatId]);
    
    return (
        <div className='messages'>
            {messages.map(msg => (
                <Message message={msg} key={msg.id}/>
            ))}
        </div>
    );
};

export default Messages;