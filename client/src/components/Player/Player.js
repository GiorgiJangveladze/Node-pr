import React, { useState, useEffect }  from 'react';

import Track from '../Track/Track';
import Video from '../Video/Video';

import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';
import './Player.css';

const Player = () => {
    const [playing, setPlaying] = useState(false);
    const [url, setUrl] = useState('');    
    
    useEffect(() => {
        if(url != '')
            setPlaying( true )
    }, [url]);

    return <div className={ 'right-side-wrapper' }>
        <div className={ 'player-wrapper right-side-icons' } onClick={ () => url != '' ? setPlaying( !playing ) : null }>
            <img src={ playing ? pauseIcon :  playIcon } className={ 'player-icon' } alt="track" />
        </div>
        {
            url != '' ?
                <Video playing={ playing } setPlaying={ setPlaying } /> 
            : null
        }
        <Track url={ url } setUrl={ setUrl } />
    </div>
}


export default Player;