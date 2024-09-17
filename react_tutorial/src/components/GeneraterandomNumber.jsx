import React, { memo } from 'react'

export const GeneraterandomNumber = memo(({randomNumber, generateRandomNumber}) => {
    console.log("Generate Random Number Rendered");
  return (
    <div>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={generateRandomNumber}>Generate</button>
    </div>
  )
})
