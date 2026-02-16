import React, { useMemo, useState } from 'react';

export default function Sum() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const sum = useMemo(() => {
    const numA = Number(a) || 0;
    const numB = Number(b) || 0;
    return numA + numB;
  }, [a, b]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <label htmlFor="aInput">A: </label>
      <input
        id="aInput"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter value of a"
      />

      <br />

      <label htmlFor="bInput">B: </label>
      <input
        id="bInput"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter value of b"
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
}