import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stopwatch from "../Screens/stopwatch";
import Watch from "../Screens/watch";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stopwatch">
        <Stack.Screen name="Stopwatch" component={Stopwatch} />
        <Stack.Screen name="Clock" component={Watch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
