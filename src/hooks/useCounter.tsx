import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const useCounter = () => useContext(CounterContext);

export default useCounter;
