import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddTo from "./src/screens/AddTo";
import Encyclopedia from "./src/screens/Encyclopedia";
import Calendar from "./src/screens/Calendar";
import Settings from "./src/screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <Splashscreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "gold",
          },
        })}
      >
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
  Gradiant: {},
});
