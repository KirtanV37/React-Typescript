import { useContext } from "react";
import { CounterContext } from "../context/counter/CounterContext";

const Counter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Counter must be used within a CounterProvider");
  }

  console.log("context: ", context);
  const { count, decrement, increment, reset } = context;

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
