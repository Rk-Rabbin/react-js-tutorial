import React from 'react'

export const LearnLiftingStateUp = (props) => {
    const handleClick1 = (e)=>{
        e.preventDefault();
        let dt = "Child Data";
        props.mydata(dt);
    }
  return (
    <>
    <button onClick={handleClick1}>Handle Data</button>
    </>
  )
}
