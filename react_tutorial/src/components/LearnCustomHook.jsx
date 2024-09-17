import { useCustomCounter } from "../hooks/useCustomCounter"

export const LearnCustomHook = () => {
    const {count, handleCount} = useCustomCounter();
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={handleCount}>Counter</button>
    </>
  )
}
