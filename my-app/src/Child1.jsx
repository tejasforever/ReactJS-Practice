
// Child1: Passes props down to Child2 component
// Demonstrates prop passing and component composition in React
// You can use this as a reference for multi-level prop drilling
import React from 'react';
import Child2 from './Child2';

export default function Child1(props) {
  // Passes 'info' prop as 'a' to Child2
  return (
    <div>
      <Child2 a={props.info} />
    </div>
  );
}
