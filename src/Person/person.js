import React from 'react';
import './person.css'

export default function Person(props)
{
  return(
    <div className="Person">
      <p onClick={props.handleClick}>Hi I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.handleInput} value={props.name}/>
    </div>
  )
}