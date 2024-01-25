import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/screens/Details";
import TabNavigator from "./src/navigation/tabnavigator";


export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <Splashscreen />;
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
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
