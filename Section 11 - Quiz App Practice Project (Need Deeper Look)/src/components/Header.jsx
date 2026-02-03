import quizLogo from '../assets/quiz-logo.png';
export default function Header() {
    return <header>
        <img src={quizLogo} alt='Clipboard with quiz papers, a marker and a pen.' />
        <h1>ReactQuiz</h1>
    </header>;
}
