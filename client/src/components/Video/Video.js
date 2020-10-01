import React, { useState, Fragment } from 'react';

import ReactPlayer from 'react-player'
import Modal from '../Modal/Modal';

import './Video.css';
import multimediaIcon from '../../assets/icons/multimedia.png';

const Video = ({ playing, setPlaying }) => {
    const [open, setOpen] = useState(false);


    return (
        <Fragment>
            <div className={ 'track-wrapper right-side-icons' }>
                <div onClick={ () => setOpen(true) }><img src={ multimediaIcon } className={ 'player-icon' } alt="track" /></div>
            </div>
            <Modal
                show={open}
                width={'80%'}
                onHide={() => { setOpen(false) }}
                title = {""}
            >
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=wEERFBI9eCg&ab_channel=Nightwish'
                    playing={ playing }
                    onPause={ () =>  setPlaying(false) }
                    onPlay={ () => setPlaying(true) }
                    loop={ true }
                    width={ '100%' }
                    className={ 'player-box' }
                    config={{ youtube: { playerVars: { disablekb: 1 } }}}
                />
            </Modal>
        </Fragment>
    )
}

export default Video;