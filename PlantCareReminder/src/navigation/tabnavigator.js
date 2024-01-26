import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeStack from "./HomeStack";
// import HomeScreen from "./src/screens/HomeScreen";
import AddTo from "../screens/AddTo";
import Encyclopedia from "../screens/Encyclopedia";
import Calendar from "../screens/Calendar";
import Settings from "../screens/Settings";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "forestgreen",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
        name="Add Plant"
        component={AddTo}
        options={{
          tabBarLabel: "",
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
  );
}

const styles = StyleSheet.create({});
