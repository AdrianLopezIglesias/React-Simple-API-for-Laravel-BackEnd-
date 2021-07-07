import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const timeNow = (
        <div>
            <h1>Son las: {new Date().toLocaleTimeString()}</h1>
        </div>
    )
    ReactDOM.render(
        timeNow,
        document.getElementById("root")
    )
}
setInterval(tick, 1000);