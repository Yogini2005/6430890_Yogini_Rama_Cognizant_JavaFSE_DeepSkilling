import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011; // Example conversion rate
    setEuros((rupees * rate).toFixed(2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Equivalent in Euros: €{euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;

