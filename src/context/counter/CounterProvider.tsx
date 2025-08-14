import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

/*
Syntax [Of what is the type of 'children']:-

const MyComponent: React.FC<{ name: string, age: number }> = ({ name,age }) => <p>{name}{age}</p>;

-> in context of jsx we write logic directly, in tsx the implementation is same but the logic's type have to define in the type / interface and also wrap in the createContext().

*/
