import React from 'react'

export default function MainData() {

    const[data, setData] = React.useState ({
        child1: 'Child1',
        child2 :'Child2',
        child3 :'Child3' });

  return (
    <div>
        <Child1 info={data}/>
    </div>
  )
}
