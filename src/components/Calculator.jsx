import { useState } from "react";

const Calculator = () => {
  const [userValues, setUserValues] = useState({
    amount: "",
    interest: "",
    years: "",
  });

  const handleInputChange = (event) => {
    // 
  }

  return (
    <div>
      <form action="">
        <div>
          <div>
            <label>Amount:</label>
            <input type="text" name="amount" placeholder="Loan amount" value={userValues.amount} onChange={handleInputChange}/>
          </div>
          <div>
            <label htmlFor="">Interest</label>
            <input type="text" name="interest" placeholder="Interest" value={userValues.interest} onChange={handleInputChange}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
