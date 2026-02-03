import { useState } from 'react';

import Clock from './components/Clock';
import ShinyTimer from './components/ShinyTimer';
import Timer from './components/Timer';

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  function handleTimerToggle() {
    setShowTimer(previous => !previous);
  }
  
  return (
    <>
      {/* <Clock /> */}
      <div className='timer-container'>
        <button onClick={handleTimerToggle}>{!showTimer ? 'Show' : 'Hide'}</button>
      </div>
      {/* {showTimer && <Timer />} */}
      {showTimer && <ShinyTimer />}
    </>
  );
}
