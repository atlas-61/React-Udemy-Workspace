import React from 'react';

export default function UserOutput (props)
{
  return(
    <div className={props.className}>
      <p onClick={props.click}><b>{props.userName} {"(" + props.age + ")"}:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse eget augue ac nibh placerat maximus eu vitae neque. 
        Nulla facilisi.</p>
    </div>
  )
}