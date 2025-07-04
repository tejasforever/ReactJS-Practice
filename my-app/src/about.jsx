import React from 'react';

export default function About() {
  const [number, setNumber] = React.useState(0);
  let a = 0;
  const handleClickCount = () => {
    console.log('Button clicked');
    a=a+1;
    console.log(a);
    
  };
  const handleClick = () => {
    setNumber(number => number + 1);
  };
  
  // console.log(number);
  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={handleClickCount}>Click Me</button>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
