import React from 'react';

import Track from '../Track/Track';
import Video from '../Video/Video';

import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';
import './Player.css';

const Player = () => (
    <div className={ 'right-side-wrapper' }>
        <div className={ 'player-wrapper right-side-icons' }>
            <a href="/" ><img src={ playIcon } className={ 'player-icon' } alt="track" /></a>
        </div>
        <Video />
        <Track />        
    </div>
)

export default Player;