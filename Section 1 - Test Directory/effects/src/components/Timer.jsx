import { useState, useEffect } from 'react';
import './timer.css';

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const [isLocalTime, setIsLocalTime] = useState(true);
  const displayTime = isLocalTime ? time.toLocaleTimeString() : time.toUTCString();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Interval!');
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Unmounting!');
      clearInterval(timer);};
  }, []);

  function handleLocalUTCSwitch() {
    setIsLocalTime(previous => !previous);
  }

  return (
    <div className="timer-container">
      <h2>🕐 Clock</h2>
      <p>{displayTime}</p>
      <button onClick={handleLocalUTCSwitch}>Show {isLocalTime ? 'UTC' : 'Local'} Time</button>
      {/* <button onClick={handleTimerStop}>Stop</button> */}
    </div>
  );
}
