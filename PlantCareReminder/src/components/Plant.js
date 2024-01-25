import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Plant(props) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();


  const plant = props.name;
  return (
    //Nje kartel ndahet ne tri views: viewi per foto,detaje dhe per butona
    <View style={styles.maincontainer}>
      <View>
        <Image
          style={styles.plantImage}
          source={require("../images/aglonema.jpg")}
        />
      </View>

      <View>
        <Text style={{ fontSize: 22, fontWeight: "400" }}>{plant}</Text>
        <Text style={{ fontSize: 14, paddingLeft: 2, marginTop: 10 }}>
          <MaterialCommunityIcons
            name="watering-can"
            color={"black"}
            size={20}
          />{" "}
          0d 23h 15m
        </Text>
        <Text style={{ fontSize: 14 }}>
          <MaterialCommunityIcons name="flower" color={"black"} size={20} /> 0d
          23h 15m
        </Text>
        <Text style={{ fontSize: 14 }}>
          <MaterialCommunityIcons
            name="thermometer"
            color={"black"}
            size={20}
          />{" "}
          13 - 21 °C
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {/* //Details Button */}
        <View style={{gap: 5,flexDirection: "row", justifyContent: "flex-end"}}>
          <Text>Details</Text>
          <Pressable
            onPress={() => navigation.navigate("Details", {plantName: plant})}
          >
            <MaterialCommunityIcons
              name="information-outline"
              color={"black"}
              size={20}
            />
          </Pressable>
        </View>
        <Pressable
          style={{ width: 75, alignItems: "center", alignSelf: "flex-end" }}
        >
          <Text
            style={{
              backgroundColor: "#00B359",
              padding: 3.5,
              borderRadius: 5,
            }}
          >
            Water{" "}
            <MaterialCommunityIcons
              name="watering-can"
              color={"black"}
              size={20}
            />
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: "row",

    width: "100%",
    height: 125,

    padding: 10,
    borderRadius: 15,

    backgroundColor: "#D9D9D9",
    gap: 10,
  },
  plantImage: {
    width: 100,
    height: "100%",

    borderRadius: 10,
  },
});
