import React from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import useCounter from "../hooks/useCounter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../App";

type HomeProps = NativeStackScreenProps<RootStackParams, "Details">;

const Login = ({ navigation }: HomeProps) => {
  const { counter, increment, decrement } = useCounter();
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 180 }}
    >
      <View style={styles.loginContainer}>
        <View style={styles.headers}>
          <Text style={styles.headers}>Welcome Back</Text>
        </View>
        <View
          style={{
            padding: 3,
            width: "100%",
          }}
        >
          <TextInput
            style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
            placeholder="email"
          ></TextInput>
        </View>
        <View style={{ width: "100%", padding: 3 }}>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="password"
          ></TextInput>
        </View>
        <View style={{ width: "100%" }}>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("Details", { email: "eldar@gmail.com" })
            }
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 20 }}>
          <Pressable>
            <Text style={{ color: "blue" }}>
              Don't have an account? Register
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    fontSize: 22,
    color: "white",
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708f81",
    borderRadius: 40,
    padding: 50,
    width: "80%",
  },
  button: {
    padding: 15,
    backgroundColor: "green",
    borderRadius: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 18,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
export default Login;
