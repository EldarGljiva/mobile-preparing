import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";

type HomeProps = NativeStackScreenProps<StackParams, "Details">;

const Details = () => {
  //const { email } = route.params;
  return (
    <View>
      <Text>Email is: </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Details;
