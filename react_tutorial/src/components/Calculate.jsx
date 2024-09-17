import React, { useState } from 'react'

export const Calculate = () => {
    const [num, setNum] = useState(0);
    const handleCalculate = () => {
        setNum(num+1);
    };
    const resetCalculate = () => {
        setNum(0);
    };

  return (
    <>
        <button onClick={handleCalculate}>Calculate</button>
        <button onClick={resetCalculate}>Reset</button>
        <h3>{num}</h3>
    </>
  )
}
