import { useState } from "react";

const Calculator = () => {
  const [userValues, setUserValues] = useState({
    amount: "",
    interest: "",
    years: "",
  });

  const handleInputChange = (event) => {
    setUserValues({ ...userValues, [event.target.name]: event.target.value });
  };

  const handleSubmitValues = (e) => {
    e.preventDefault();
    console.log(userValues);
  };

  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
  });

  return (
    <div>
      <form onSubmit={handleSubmitValues}>
        <div>
          <div>
            <label>Amount:</label>
            <input
              type="text"
              name="amount"
              placeholder="Loan amount"
              value={userValues.amount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="">Interest</label>
            <input
              type="text"
              name="interest"
              placeholder="Interest"
              value={userValues.interest}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="">Years</label>
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
      </form>
    </div>
  );
};

export default Calculator;
