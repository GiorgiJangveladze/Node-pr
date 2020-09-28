import React, { useState, Fragment } from 'react';

import './Track.css';
import trackIcon from '../../assets/icons/trackIcon.png';

const Track = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <div className={ 'track-wrapper right-side-icons' }>
                <div onclick={() => setOpen(true)}><img src={ trackIcon } className={ 'player-icon' } alt="track" /></div>
            </div>

        </Fragment>
    )
}

export default Track;