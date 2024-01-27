import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fetchWikiExtract from "../backend/wikiApi";
import fetchData from "../backend/wikiApi";
import storage from "../backend/storage";
import { getIds, savePlant, loadPlant, loadPlantName } from "../backend/storageFunctions";

// const WindowWidth = Dimensions.get("window").width;
// const WindowHeight = Dimensions.get("window").height;

// const wikiData = await fetchWikiExtract("Aglaonema");
// const wikiOutput = wikiData.query.pages[0].extract;



export default function Settings() {
  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          // const value = loadPlantName("Plants", "0001");
          // getIds("Plants");
          // loadPlants();
          // console.log(value);
          // savePlant("Plants", "0002", "Kifa", "13", "23");
          // console.log(plant0003);
          // storage.remove("Plants", "0001");

          // storage.getAllDataForKey('Plants').then(users => {
          //   console.log(users);
          // });
        }}
      >
        <Text>Load Plant</Text>
      </Pressable> */}

      <Text style={styles.GeneralSettings}>General Settings</Text>
      <View style={styles.Language}>
        <MaterialCommunityIcons
          name="translate"
          color={"forestgreen"}
          size={40}
          style={{ marginBottom: 10 }}
        />
        <View
          style={{ flexDirection: "column", marginLeft: 5, marginBottom: 10 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Language</Text>
          <Text style={{ opacity: 0.6 }}>English</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "1%",
          borderBottomWidth: 1,
          opacity: 0.7,
        }}
      />
      <View style={styles.Language}>
        <MaterialCommunityIcons
          name="thermometer"
          color={"forestgreen"}
          size={40}
          style={{ marginTop: 10 }}
        />
        <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Temperature</Text>
          <Text style={{ opacity: 0.6 }}>Celsius</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "1%",
          borderBottomWidth: 1,
          opacity: 0.7,
          marginTop: 10,
          marginBottom: 30,
        }}
      />
      <Text style={styles.GeneralSettings}>About</Text>
      <View style={styles.Language}>
        <MaterialCommunityIcons
          name="cellphone"
          color={"forestgreen"}
          size={40}
          style={{ marginBottom: 10 }}
        />
        <View
          style={{ flexDirection: "column", marginLeft: 5, marginBottom: 10 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Version</Text>
          <Text style={{ opacity: 0.6 }}>V.1.0</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "1%",
          borderBottomWidth: 1,
          opacity: 0.7,
        }}
      />
      <View style={styles.Language}>
        <MaterialCommunityIcons
          name="code-tags"
          color={"forestgreen"}
          size={40}
          style={{ marginTop: 10 }}
        />
        <View style={{ flexDirection: "column", marginLeft: 5, marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Developers</Text>
          <Text style={{ opacity: 0.6 }}>
            Hakif Kadriu, Altin Syla, Flamur Isa
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "1%",
          borderBottomWidth: 1,
          opacity: 0.7,
          marginTop: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: "100%",
    marginHorizontal: 20,
  },
  GeneralSettings: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 25,
  },

  Language: {
    flexDirection: "row",
    width: "100%",
  },
});
