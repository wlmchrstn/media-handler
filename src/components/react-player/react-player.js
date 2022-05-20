import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const Player = () => {
    const [play,setPlay] = useState(true);
    return (
        <>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=mXrIBio12vI'
                playing={play}
                muted={true}
                controls={true}
                loop={true}
                onReady={() => console.log('video ready')}
                onStart={() => console.log('video starting')}
                onPlay={() => console.log('video playing')}
                onPause={() => console.log('video paused')}
                onEnded={() => console.log('video ended')}
            />
            <button onClick={() => setPlay(!play)}>
                {play ? 'stop' : 'start'}
            </button>
        </>
    );
};

export default Player;
