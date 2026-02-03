import React from 'react';

function App() {
    const [headingColor, setHeadingColor] = React.useState("white");

    function handleClick(value) {
        setHeadingColor(value);
    }

    return (<div id="app">
        <h1 style={{ color: headingColor }}>CSS is great!</h1>
        <menu>
            <li>
                <button onClick={() => handleClick("red")} >Yes</button>
            </li>
            <li>
                <button onClick={() => handleClick("green")}>No</button>
            </li>
        </menu>
    </div>);
}

export default App;
