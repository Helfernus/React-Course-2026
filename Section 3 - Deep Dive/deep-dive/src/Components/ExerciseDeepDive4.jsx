import React from 'react';
import './ExerciseDeepDive4.css';
import Review from './ExerciseDeepDive4Review';

function ExerciseDeepDive4() {
  const [feedback, setFeedback] = React.useState('');
  const [name, setName] = React.useState('');

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={handleFeedbackChange}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name} onChange={handleNameChange}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={name}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default ExerciseDeepDive4;
