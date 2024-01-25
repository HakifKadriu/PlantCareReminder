import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function DetailsCard(props) {
  const [text, setText] = React.useState("");
  const placeholderText = "Plant Description";

  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require("../images/aglonema.jpg")} />
      <View>
        <Text style={styles.Text}>{props.name}</Text>
      </View>
      <View style={{ width: "93%" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{}}>Irrigation Cycle:</Text>
          <Text style={styles.ThirdText}>Every 7 Days</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{}}>Fertilize Cycle:</Text>
          <Text style={styles.ThirdText}>Every 14 Days</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{}}>Optimal Temperature:</Text>
          <Text style={styles.ThirdText}>16-20 °C</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.txtInput}
          value={text}
          onChangeText={(text) => setText(text)}
          multiline
          placeholder={placeholderText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ddd",
    width: "100%",
    height: WindowHeight * 0.75,
    borderRadius: 20,
    alignItems: "center",
  },
  Image: {
    width: 320,
    height: 320,
    marginTop: 15,
    borderRadius: 20,
  },
  Text: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 30,
  },
  SecondaryText: {
    fontSize: 13,
    fontWeight: "600",
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 130,
    flexWrap: "wrap",
    marginTop: 20,
    // opacity: '50%'

    // textAlign: "left",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
