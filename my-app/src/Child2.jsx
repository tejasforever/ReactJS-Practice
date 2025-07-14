import React from 'react'
import Child3 from './child3'

export default function Child2(props) {
  return (
    <div>
       <Child3 b={props.a} />
    </div>
  )
}
