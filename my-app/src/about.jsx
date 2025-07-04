import React from 'react';

export default function About() {
  const [number, setNumber] = React.useState(0);

  const handleClick = () => {
    setNumber(number => number + 1);
  };
  console.log(number);
  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
