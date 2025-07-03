import React from 'react';

let number = 1;

export default function About() {
  number = number + 1;
  console.log('Current number:', number);
  return (
    <div>
      <h2>Number: {number}</h2>
    </div>
  );
}