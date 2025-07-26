
// Child3: Receives prop 'b' and passes it as 'c' to Child4
// Demonstrates prop passing through multiple components
import React from 'react';
import Child4 from './Child4';

export default function Child3(props) {
  // Passes 'b' prop as 'c' to Child4
  return (
    <div>
      <Child4 c={props.b} />
    </div>
  );
}
