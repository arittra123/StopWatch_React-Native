import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Stopwatch from "../Screens/stopwatch";
import Watch from "../Screens/watch";

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Stopwatch") {
              iconName = focused ? "stopwatch-outline" : "stopwatch-sharp";
            } else if (route.name === "Clock") {
              iconName = focused ? "ios-watch-outline" : "ios-watch-sharp";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6F7723",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Stopwatch"
          component={Stopwatch}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Clock"
          component={Watch}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
