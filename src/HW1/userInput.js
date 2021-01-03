import React from 'react';

export default function UserInput (props)
{
  const style = {
    border: "1px solid #6a1b9a"
  }
return(
  <div>
    <input name={props.name} style={style} type="text" onChange={props.changeName} value={props.userName}/>
  </div>
)
};