import React from 'react';
import './ExerciseDeepDive1.css';

function Summary({ text }) {
    return (
        <>
            <h1>Summary</h1>
            <p>{text}</p>
        </>);
}

export default function ExerciseDeepDive1() {
    return (
        <div id="app" data-testid="app">
            <Summary text="Fragments help you avoid unnecessary HTML elements." />
        </div>
    );
}