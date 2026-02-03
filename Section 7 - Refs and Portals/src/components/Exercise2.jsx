import React from 'react';
// import './Exercise2.css';
import Exercise2Input from './Exercise2Input';

export const userData = {
    name: '',
    email: '',
};

export default function Exercise2() {
    const nameRef = React.useState();
    const emailRef = React.useState();

    function handleSaveData() {
        userData.name = nameRef.current.value;
        userData.email = emailRef.current.value;
        console.log(userData);
    }

    return (
        <div id="app">
            <Exercise2Input ref={nameRef} type="text" label="Your Name" />
            <Exercise2Input ref={emailRef} type="email" label="Your E-Mail" />
            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}

