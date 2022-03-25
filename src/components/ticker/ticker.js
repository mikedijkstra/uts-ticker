import React, { useLayoutEffect, useState } from "react";
import Ticker from "react-ticker";
import './ticker.css';
import './button.css';
import headlinesText from './headlines';
import {
    Link
  } from "react-router-dom";



function NewsTicker() {
    const [offset, setOffset] = useState(0)
    const [move, setMove] = useState(false)

    const _speed = 8;

    useLayoutEffect(() => {
        const pixelsPerSecond = 82.6758
        /* eslint-disable-next-line */
        const startTime = START_TIME || Date.now();
        const timeStamp = Date.now();
        const offset = pixelsPerSecond * ((timeStamp - startTime) / 1000);
        setOffset(offset)
        setMove(true)
    }, [])

    return (
        <div>
        {move ? <Ticker speed={_speed} offset={-offset} move={move}>
            {() => (
                <>
                    <div className="mainTicker">
                        {headlinesText}
                    </div>
                </>
            )}
        </Ticker> : null }
        {/* INSERT MROUTING PATH FOR LINK TO INFO BELOW - href */}
        <div className="linkButton"><Link to="/about">About</Link></div>
        </div>
    );
}

export default NewsTicker