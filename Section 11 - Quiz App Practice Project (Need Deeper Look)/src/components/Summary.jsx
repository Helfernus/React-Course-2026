import quizCompleteImage from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
    const correctPercentage = Math.round((correctAnswers / userAnswers.length) * 100);
    const skippedPercentage = Math.round((skippedAnswers / userAnswers.length) * 100);
    const wrongPercentage = 100 - correctPercentage - skippedPercentage;

    return <div id='summary'>
        <img src={quizCompleteImage} alt='Trophy' />
        <h2>Quiz Completed</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedPercentage}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctPercentage}%</span>
                <span className='text'>Correctly Answered</span>
            </p>
            <p>
                <span className='number'>{wrongPercentage}%</span>
                <span className='text'>Incorrectly Answered</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClasses = 'user-answer';
                if (answer === null) {
                    cssClasses += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClasses += ' correct';
                } else {
                    cssClasses += ' wrong';
                }
                return <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className='question'>{QUESTIONS[index].text}</p>
                    <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                </li>
            })}

        </ol>
    </div>;
}
