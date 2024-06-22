import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { CounterProvider } from "./src/contexts/CounterContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Details from "./src/screens/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type StackParams = {
  Home: undefined;
  Login: undefined;
  Details: { email?: string };
};

export type BottomBarParams = {
  Main: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();
const BottomTabBar = createBottomTabNavigator<BottomBarParams>();

const RootStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <NavigationContainer>
          <BottomTabBar.Navigator>
            <BottomTabBar.Screen
              name="Main"
              component={RootStack}
              options={{ headerShown: false }}
            />
          </BottomTabBar.Navigator>
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
