import React from 'react';
import Exercise3Toast from './Exercise3Toast';
// import './Exercise3.css';

function Exercise3() {
    const [showToastTimer, setShowToastTimer] = React.useState(false);
    function handleEnrol() {
        setShowToastTimer(true);
        setTimeout(() => {
            setShowToastTimer(false);
        }, 3000);
    }

    return (
        <div id="app">
            {showToastTimer && <Exercise3Toast message="Enrolled!" />}
            <article>
                <h2>React Course</h2>
                <p>
                    A course that teaches you React from the ground up and in great depth!
                </p>
                <button onClick={handleEnrol}>Enrol</button>
            </article>
        </div>
    );
}

export default Exercise3;
