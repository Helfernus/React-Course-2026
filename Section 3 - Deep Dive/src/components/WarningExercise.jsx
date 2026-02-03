import React from 'react';
import { useState } from 'react'

export default function App() {
    const [isClicked, updateIsClicked] = useState(false);
    function clickHandler(isClicked) {
        updateIsClicked(isClicked);
    }
    
    let warningContent = '';
    if (isClicked) {
        warningContent = (<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => clickHandler(false)}>Proceed</button>
        </div>);
    }
        
    return (
      <div>
        {warningContent}
        <button onClick={() => clickHandler(true)}>Delete</button>
      </div>    
    );
}
