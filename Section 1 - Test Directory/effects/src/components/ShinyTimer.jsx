import { useState, useEffect, useRef } from 'react';
import './ShinyTimer.css';

export default function ShinyTimer() {
  const [time, setTime] = useState(new Date());
  const [isLocalTime, setIsLocalTime] = useState(true);
  const [isRunning, setIsRunning] = useState(true);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerIdRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isRunning]);

  const displayTime = isLocalTime
    ? time.toLocaleTimeString()
    : time.toUTCString();

  function handleLocalUTCSwitch() {
    setIsLocalTime(prev => !prev);
  }

  function handleTimerToggle() {
    setIsRunning(prev => !prev);
  }

  return (
    <div className={`timer-container ${!isRunning ? 'paused' : ''}`}>
      <h2>🕐 Clock</h2>
      <p>{displayTime}</p>
      <div>
        <button onClick={handleLocalUTCSwitch}>
          Show {isLocalTime ? 'UTC' : 'Local'} Time
        </button>
        <button onClick={handleTimerToggle}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}
