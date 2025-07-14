import React from 'react'

export default function Child2(props) {
  return (
    <div>
       <Child3 b={props.a} />
    </div>
  )
}
