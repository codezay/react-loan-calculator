import { useState } from "react";

const Calculator = () => {
  const [userValues, setUserValues] = useState({
    amount: "",
    interest: "",
    years: "",
  });

  // function to set the values of the  above state
  const handleInputChange = (event) => {
    setUserValues({ ...userValues, [event.target.name]: event.target.value });
  };

  // function to handle submition
  const handleSubmitValues = (e) => {
    e.preventDefault();
    console.log(userValues);
    if (isvalid()) {
      setError("");
      calculateResults(userValues);
    }
  };

  // function to calculate the data
  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }

    return;
  };

  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
  });

  const [error, setError] = useState("");

  const isvalid = () => {
    const { amount, interest, years } = userValues;
    let actualError = "";

    if (!amount || !interest || !years) {
      actualError = "All the Fields are required";
    }

    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = "All Values must be a number";
    }

    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = "All numbers must be positive and greater than zero";
    }

    if (actualError) {
      setError(actualError);
      return false;
    } else {
      return true;
    }
  };

  const clearFields = () => {
    setUserValues({
      amount: "",
      interest: "",
      years: "",
    });

    setResults({
      monthlyPayment: "",
      totalPayment: "",
      totalInterest: "",
      isResult: false,
    });
  };

  return (
    <div className="calculator">
      <div className="form">
        <h1 className="test">Loan Calculator</h1>
        <p className="error">{error}</p>
        <form onSubmit={handleSubmitValues}>
          {!results.isResult ? (
            // Form to submit data
            <div className="form-items">
              <div>
                <label id="label">Amount:</label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Loan amount"
                  value={userValues.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id="label">Interest</label>
                <input
                  type="text"
                  name="interest"
                  placeholder="Interest"
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id="label">Years</label>
                <input
                  type="text"
                  name="years"
                  placeholder="Years"
                  value={userValues.years}
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" />
            </div>
          ) : (
            // Form to display data
            <div className="form-items">
              <h4>
                Loan amount: Rs {userValues.amount} <br />
                Interest: {userValues.interest} <br />
                Years to repay: {userValues.years}
              </h4>
              <div>
                <label id="label">Monthly Payment:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={results.monthlyPayment}
                  disabled
                />
              </div>
              <div>
                <label id="label">Total Payment:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={results.totalPayment}
                  disabled
                />
              </div>
              <div>
                <label id="label">Total Interest:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={results.totalInterest}
                  disabled
                />
              </div>
              <input
                type="button"
                value="Clear"
                className="button"
                onClick={clearFields}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Calculator;
