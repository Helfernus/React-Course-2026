import React from 'react';

function App() {
  const [headingButton, setHeadingButton] = React.useState(null);

  function handleClick(value) {
    setHeadingButton(value);
  }

  return (<div id="app">
    <h1 className={headingButton}>CSS is great!</h1>
    <menu>
      <li>
        <button onClick={() => handleClick("highlight-green")} >Yes</button>
      </li>
      <li>
        <button onClick={() => handleClick("highlight-red")} >No</button>
      </li>
    </menu>
  </div>
  );
}

export default App;
