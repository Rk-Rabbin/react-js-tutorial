import React from 'react'
import { useState } from 'react'

export const LearnState = () => {
    const [num, setNum] = useState(40);
    const handleNum = ()=>{
        setNum(12)
    };

    const [position, setPosition] = useState({x:12, y:31});
    console.log(position);
    const handlePosition = ()=>{
        setPosition({x:21, y:13})
    };
  return (
    <>
    <h1>Number: {num}</h1>
    <button onClick={handleNum}>Number</button>
    <h1>Position: {position.x}, {position.y}</h1>
    <button onClick={handlePosition}>Update Position</button>
    </>
  )
}
