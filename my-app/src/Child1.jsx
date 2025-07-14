import React from 'react'

export default function Child1(props) {
  return (
    <div>
      <Child2 a={props.info} />
    </div>
  )
}
