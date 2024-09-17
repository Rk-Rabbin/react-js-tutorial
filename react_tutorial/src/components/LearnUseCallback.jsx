import { useCallback, useState } from "react";
import { GeneraterandomNumber } from "./GeneraterandomNumber";


export const LearnUseCallback = () => {
    const [randomNumber, setRandom] = useState(0);
    const generateRandomNumber = useCallback(
        () => {
            const newRandomNumber = Math.floor(Math.random() * 100) + 1;
            console.log("Random Number");
            setRandom(newRandomNumber);
        }, [randomNumber]
    )

    const [num, setNum] = useState(0);
    const newNum = () => {
        console.log("Count Pressed");
        setNum(num+1);
    };
  return (
    <>
    <GeneraterandomNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber}/>
    <hr />
    <h2>Count: {num}</h2>
    <button onClick={newNum}>Add</button>
    </>
  )
}
