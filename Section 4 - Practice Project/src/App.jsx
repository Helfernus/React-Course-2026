import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

const defaultInputFieldValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {
  const [investmentValues, setInvestmentValues] = useState(defaultInputFieldValues);

  function handleInvestmentInputChanges(fieldName, fieldValue) {
    setInvestmentValues(previousValues => {
      let newValues = { ...previousValues, [fieldName]: +fieldValue };
      return newValues;
    });
  }
  
  return (
    <>
      <Header />
      <UserInput investmentValues={investmentValues} onInputChange={handleInvestmentInputChanges} />
      {investmentValues.duration < 1 ? <p className="center">Invalid Duration! Please enter a value more than 0.</p> : <Results investmentValues={investmentValues} />}
    </>
  )
}

export default App
