import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect( () => {
        const { name, room } = queryString.parse( location.search );
        console.log('name', queryString.parse( location.search ))
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, ({ error }) => {
            // alert(error);
        });
        
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect( () => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages])

    const sendMessage = e => {
        e.preventDefault();
        
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className={ 'outer-container' }>
            <div className={ 'container' }>
                <InfoBar room={ room } />
                <Messages messages={ messages } name={ name } />
                <Input 
                    message={ message }
                    setMessage={ setMessage }
                    sendMessage={ sendMessage }
                />
            </div>
        </div>
    )
}

export default Chat;