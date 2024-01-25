import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import WikiCard from "../components/WikiCards";
import {
  NavigationContainer,
  Link,
  useLinkProps,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";

// const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default function Encyclopedia({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <TextInput
            style={styles.searchInput}
            label="Search"
            value={search}
            placeholder="Search by Plant Name"
            placeholderTextColor={"#a6a6a6"}
            onChangeText={(search) => setSearch(search)}
          />
        </View>

        <View style={styles.tipContainer}>
          <Text style={{ fontSize: 22 }}>Quick Tip!</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            All plants have their respective scientific name. Type it in the
            search bar above to find various information and tips about your
            plants!
          </Text>
        </View>

        <Text style={{ fontSize: 26, marginTop: 40 }}>
          Popular Indoor Plants
        </Text>

        <View style={styles.plantsContainer}>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
          <WikiCard></WikiCard>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // height: windowHeight,

    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 20,

    height: windowHeight * 0.075,

    backgroundColor: "#D9D9D9",
    borderRadius: 10,

    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 40,
  },
  tipContainer: {
    backgroundColor: "#e6e6e6",
    borderRadius: 10,

    paddingVertical: 10,
    paddingHorizontal: 15,

    height: 200,
  },
  plantsContainer: {
    gap: 15,
    marginTop: 10,
  },
});
