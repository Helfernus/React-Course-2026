import investmentLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return <header id="header">
        <img src={investmentLogo} alt="Investment Calculator Logo - A Bag with a Dollar Sign placed in the middle of stacks of coins." />
        <h1>Investment Calculator</h1>
    </header>
}