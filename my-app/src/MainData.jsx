
// MainData: Top-level component for passing data through multiple child components
// Demonstrates how to structure and pass data as props in React
import React from 'react';
import Child1 from './Child1';

export default function MainData() {
  // State object containing data for all children
  const [data, setData] = React.useState({
    child1: 'Child1',
    child2: 'Child2',
    child3: 'Child3'
  });

  // Passes 'data' as 'info' prop to Child1, which will be drilled down
  return (
    <div>
      <Child1 info={data} />
    </div>
  );
}
