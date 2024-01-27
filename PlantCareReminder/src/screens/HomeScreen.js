import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import Plant from "../components/Plant";
import { SelectList } from "react-native-dropdown-select-list";
import storage from "../backend/storage";
import { LoadPlants } from "../backend/storageFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Name (desc)" },
    { key: "2", value: "Name (asc)" },
    { key: "3", value: "Irrigation Time (desc)" },
    { key: "4", value: "Irrigation Time (asc)" },
  ];




  return (
    <View style={styles.maincontainer}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 15 }}>
          My plants
        </Text>
        <SelectList
          setSelected={(selected) => setSelected(selected)}
          data={data}
          style={styles.dropdown}
          save="value"
        />
      </View>
      <ScrollView>
        <View style={styles.plantsContainer}>
            <Plant></Plant>
            <Plant></Plant>
            <Plant></Plant>
            <Plant></Plant>
            <Plant></Plant>
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: 25,
    // marginTop: 15,
    flex: 1,

    // height: windowHeight,
    marginBottom: 20,
  },
  plantsContainer: {
    gap: 5,
    width: "100%",
    // height: "80%",
  },
});
