
// About: Demonstrates two ways to increment a number in React
// 1. Using useState (reactive, updates UI)
// 2. Using a local variable (non-reactive, only logs to console)
// Both methods are preserved for reference and learning
import React from 'react';

export default function About() {
  // useState for reactive number (updates UI)
  const [number, setNumber] = React.useState(0);
  // Local variable for non-reactive increment (does not update UI)
  let a = 0;

  // Handler for non-useState increment (logs to console only)
  const handleClickCount = () => {
    console.log('Button clicked');
    a = a + 1;
    console.log(a); // This will always log 1 on each click due to re-render
  };

  // Handler for useState increment (updates UI)
  const handleClick = () => {
    setNumber(number => number + 1);
  };

  // Uncomment to see number in console on each render
  // console.log(number);

  return (
    <div>
      <h2>Number: {number}</h2>
      {/* Button for non-useState increment (console only) */}
      <button onClick={handleClickCount}>Click Me</button>
      {/* Button for useState increment (UI updates) */}
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
