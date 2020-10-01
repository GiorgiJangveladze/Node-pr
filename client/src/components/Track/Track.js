import React, { useState, useEffect,  Fragment } from 'react';

import Modal from '../Modal/Modal';

import './Track.css';
import trackIcon from '../../assets/icons/trackIcon.png';

const Track = ({ url, setUrl }) => {
    const [open, setOpen] = useState(false);
    const [link, setLink] = useState('');
    
    useEffect(() => {
        console.log('open', open)
    },[open])
    
    const checkLink = e => {
        e.preventDefault();
        setUrl(e.target.value);
    }

    return (
        <Fragment>
            <div className={ 'track-wrapper right-side-icons' } onClick={() => setOpen(true)} >
                <img src={ trackIcon } className={ 'player-icon' } alt="track" />
            </div>
            <Modal
                show={ open }
                width={'80%'}
                onHide={() => { setOpen(false) }}
                hideClose={ true }
                title = {""}
            >
                <form className={ 'link-form' }>
                    <input
                        className={ 'input' }
                        type={ 'text' }
                        placeholder={ 'Type a video link...' }
                        value={ url }
                    />
                    <button className={ 'send-button' } onClick={ e => checkLink(e) }>Play</button>
                </form>
            </Modal>
        </Fragment>
    )
}

export default Track;