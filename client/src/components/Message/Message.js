import React from 'react';

import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser 
        ? (
          <div className={ 'message-container justify-end' }>
              <p className={ 'sent-text-author pr-10' }>{ trimmedName }</p>
              <div className={ 'message-box background-dark' }>
                    <p className={ 'message-text color-light' }>{ ReactEmoji.emojify(text) } </p>
              </div>
          </div>
        ) 
        :
        (
            <div className={ 'message-container justify-start' }>
                <div className={ 'message-box background-light' }>
                    <p className={ 'message-text color-dark' }>{ ReactEmoji.emojify(text) }</p>
                </div>
                <p className={ 'sent-text-author pl-10' }>{ user }</p>
            </div>
        )
    );
}

export default Message;