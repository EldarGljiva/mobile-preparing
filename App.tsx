import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { CounterProvider } from "./src/contexts/CounterContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Details from "./src/screens/Details";

export type RootStackParams = {
  Home: undefined;
  Login: undefined;
  Details: { email?: string };
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {/* Order Matters */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </CounterProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
