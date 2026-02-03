import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('Setting Timeout!');
        const timer = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('Setting Interval');
        const interval = setInterval(() => {
            console.log('Interval');
            setRemainingTime(previousTime => previousTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
            console.log('Interval Cleared!');
        }
    }, []);

    return <progress id='question-time' value={remainingTime} max={timeout} className={mode} />;
}
