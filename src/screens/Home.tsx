import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import screenContainer from "../styles/screenContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import Counter from "../components/Counter";

type HomeProps = NativeStackScreenProps<StackParams, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={screenContainer.container}>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Counter />
    </View>
  );
};
export default Home;
