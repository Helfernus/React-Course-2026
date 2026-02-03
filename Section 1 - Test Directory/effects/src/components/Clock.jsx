import { useState, useEffect } from 'react';

export default function Clock() {

  const [time, setTime] = useState(new Date());
  const [bgColor, setBgColor] = useState('#ffffff');

  // 1️⃣ Effect to update time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: stop timer on unmount
    return () => {
      clearInterval(timerId);
      console.log('Clock stopped');
    };
  }, []); // Runs only on mount

  // 2️⃣ Effect to change background color whenever the minute changes
  useEffect(() => {
    const newColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    setBgColor(newColor);
  }, [time.getMinutes()]); // Runs every time minute changes

  return (
    <div style={{
      backgroundColor: bgColor,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '3rem',
      fontFamily: 'monospace'
    }}>
      {time.toLocaleTimeString()}
    </div>
  );
}