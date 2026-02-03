import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked, setIsClicked] = React.useState(false);
    function handleColorToggle() {
        setIsClicked(prev => !prev);
    }
    
    return (
        <div>
            <p style={{color: `${isClicked?'red':'white'}`}}>Style me!</p>
            <button onClick={handleColorToggle}>Toggle style</button>
        </div>
    );
}
