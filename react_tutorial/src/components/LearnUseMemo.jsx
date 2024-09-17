import { useMemo, useState } from "react";

export const LearnUseMemo = () => {
    const [sum,setCount] = useState(0);
    const handleCount = () => {
        console.log("Increase Count");
        setCount(sum+1);
    };

    const [randomNumber, setRandom] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Random Number");
        setRandom(newRandomNumber);
    };

    // const isCountTen = ()=>{
    //     console.log("Is Count Ten Called");
    //     if(sum===10){
    //         return "Yes";
    //     }
    //     return "No";
    // };
    const isCountTen = useMemo(()=>{
        console.log("Is Count Ten Called");
        if(sum===10){
            return "Yes";
        }
        return "No";
    }, [sum])
    
  return (
    <>
    <h2>Is {sum} equal to 10?-------------{isCountTen}</h2>
    <button onClick={handleCount}>Increase</button>
    <hr></hr>
    <h2>{randomNumber}</h2>
    <button onClick={generateRandomNumber}>Random</button>
    </>
  )
}
