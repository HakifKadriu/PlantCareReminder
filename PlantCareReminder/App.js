import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import HomeScreen from "./src/screens/HomeScreen";
import Details from "./src/screens/Details";
import Calendar from "./src/screens/Calendar";
import HealthTracker from "./src/screens/HealthTracker";
import Notifications from "./src/screens/Notifications";
import Encyclopedia from "./src/screens/Encyclopedia";
import Settings from "./src/screens/Settings";
import AddTo from "./src/screens/AddTo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

export default function () {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return <LoginScreen></LoginScreen>;
  } else {
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerStyle: {
                backgroundColor: "gold", //Ketu ndrrohet ngjyra e Headerit
              },
            })}
          >
            <Tab.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="?"
                    color={"forestgreen"}
                    size={20}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Add Plant"
              component={AddTo}
              options={{
                tabBarLabel: "", // You can set a label if needed
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                  name="plus-circle"
                    color={"forestgreen"}
                    size={37}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Encyclopedia"
              component={Encyclopedia}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="book"
                    color={"forestgreen"}
                    size={20}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Irrigation Calendar"
              component={Calendar}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="calendar"
                    color={"forestgreen"}
                    size={20}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={"forestgreen"}
                    size={20}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarLabel: "",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="information"
                    color={"forestgreen"}
                    size={20}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Gradiant: {},
});
