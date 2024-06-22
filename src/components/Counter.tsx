import React from "react";
import { View, Text, Button } from "react-native";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <View>
      <Text>Counter {counter}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default Counter;
