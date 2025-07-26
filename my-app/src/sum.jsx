
// Sum: Simple React component to display the sum of two numbers
// Demonstrates basic variable usage and JSX rendering
// You can add alternative calculation methods below, with comments for reference
import React from 'react';

export default function Sum() {
  // Define two numbers
  const a = 4;
  const b = 7;
  // Calculate their sum
  const sum = a + b;
  // Render the result
  return (
    <div>
      <h2>Sum of {a} and {b} is {sum}</h2>
    </div>
  );
}