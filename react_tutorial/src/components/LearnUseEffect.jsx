import { useState } from "react"

export const LearnUseEffect = () => {
    const [sum,setCount] = useState(0);
    const handleCount = () => {
        setCount(sum+1);
    };
    const [randomNumber, setRandom] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandom(newRandomNumber);
    }
    
  return (
    <>
    <h2>{sum}</h2>
    <button onClick={handleCount}>Increase</button>
    <hr></hr>
    <h2>{randomNumber}</h2>
    <button onClick={generateRandomNumber}>Random</button>
    </>
  )
}
