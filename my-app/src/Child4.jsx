
// Child4: Receives prop 'c' and displays its properties
// Demonstrates how to access and display nested props in React
import React from 'react';

export default function Child4(props) {
  // Displays values from the 'c' prop object
  return (
    <div>
      Child1 : {props.c.chil1},
      Child2 : {props.c.chil2},
      Child3 : {props.c.chil3}
    </div>
  );
}
