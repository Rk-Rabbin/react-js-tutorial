import { useState } from "react";

export const useCustomCounter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
  return {count, handleCount}
}
