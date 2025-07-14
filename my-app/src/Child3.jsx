import React from 'react'
import Child4 from './Child4'

export default function Child3(props) {
  return (
    <div>
       <Child4 c={props.b}/>
    </div>
  )
}
