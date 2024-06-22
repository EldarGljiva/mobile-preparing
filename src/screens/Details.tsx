import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";

type HomeProps = NativeStackScreenProps<RootStackParams, "Details">;

const Details = ({ route }: HomeProps) => {
  const { email } = route.params;
  return (
    <View>
      <Text>Email is: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Details;
