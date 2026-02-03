import { formatter, calculateInvestmentResults } from "../util/investment.js";

export default function Results({ investmentValues }) {
    const calculatedInvestmentData = calculateInvestmentResults(investmentValues);

    return <table id="result" className="center">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {calculatedInvestmentData.map(yearSpecificResult => {
                const totalInterest = yearSpecificResult.valueEndOfYear - investmentValues.initialInvestment - yearSpecificResult.year * investmentValues.annualInvestment;
                return <tr key={yearSpecificResult.year}>
                    <td>{yearSpecificResult.year}</td>
                    <td>{formatter.format(yearSpecificResult.valueEndOfYear)}</td>
                    <td>{formatter.format(yearSpecificResult.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(yearSpecificResult.valueEndOfYear - totalInterest)}</td>
                </tr>;
            })}
        </tbody>
    </table>
} 

/**
 *     let calculatedInvestments = [];
    const calculatedInvestmentData = calculateInvestmentResults(investmentValues);

    for (let i = 0; i < calculatedInvestmentData.length; i++) {

        calculatedInvestments.push({
            year: calculatedInvestmentData[i].year,
            investmentValue: calculatedInvestmentData[i].valueEndOfYear,
            interest: calculatedInvestmentData[i].interest,
            totalInterest: (i === 0) ? (calculatedInvestmentData[i].interest) : (calculatedInvestments[i - 1].totalInterest + calculatedInvestmentData[i].interest),
            investedCapital: (i === 0) ? (investmentValues.initialInvestment + investmentValues.annualInvestment) : (investmentValues.initialInvestment + investmentValues.annualInvestment * (i+1)),
            // investedCapital: calculatedInvestmentData[0].valueEndOfYear - cal,
        });

    }
 */