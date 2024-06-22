import React, { createContext, PropsWithChildren, useState } from "react";

type CounterContextType = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const initialState: CounterContextType = {
  counter: 0,
  increment: () => {},
  decrement: () => {},
};

const CounterContext = createContext<CounterContextType>(initialState);

const CounterProvider = ({ children }: PropsWithChildren<{}>) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((currCount) => currCount + 1);
  };

  const decrement = () => {
    setCounter((currCount) => currCount - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
