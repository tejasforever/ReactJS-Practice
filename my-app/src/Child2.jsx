
// Child2: Receives prop 'a' and passes it as 'b' to Child3
// Demonstrates prop passing through multiple components
import React from 'react';
import Child3 from './child3';

export default function Child2(props) {
  // Passes 'a' prop as 'b' to Child3
  return (
    <div>
      <Child3 b={props.a} />
    </div>
  );
}
