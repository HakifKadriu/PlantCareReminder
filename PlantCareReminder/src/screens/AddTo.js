// ImageTab.js
import React from "react";
import { AsyncStorage } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  DropDownPicker,
  Dimensions,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// save = async () => {
//   try {
//     await AsyncStorage.setItem("namePID1", plantName);
//   } catch (error) {
//     alert.alert(error);
//   }
// };

// load = async () => {
//   try {
//     const value = await AsyncStorage.getItem('namePID1');
//   } catch (error) {
//     alert.alert(error);
//   }
// };

const AddTo = () => {
  const [plantName, setplantName] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [selected, setSelected] = React.useState("");

  // const result = await launchCamera();

  const data = [
    { key: "1", value: "Every 1 hour" },
    { key: "2", value: "Every 2 hours" },
    { key: "3", value: "Every 6 hours" },
    { key: "4", value: "Every 12 hours" },
    { key: "5", value: "Every 24 hours" },
  ];
  return (
    <View style={styles.MainContainer}>
      <Pressable style={styles.imagePlaceholder}>
        <Text style={styles.addImageTxt}>Add An Image!</Text>
      </Pressable>
      <View style={styles.inputLabel}>
        <Text>Plant Name: </Text>
        <TextInput
          style={styles.txtInput}
          label="Email"
          value={plantName}
          onChangeText={(plantName) => setplantName(plantName)}
        />
      </View>
      <View style={styles.inputLabel}>
        <Text>Temperature: </Text>
        <TextInput
          style={styles.txtInput}
          label="Email"
          value={text2}
          onChangeText={(text2) => setText2(text2)}
        />
      </View>
      <View style={styles.Watering}>
        <Text>Water Every: </Text>
        <SelectList
          style={styles.DropDownPickeri}
          setSelected={(selected) => setSelected(selected)}
          data={data}
          save="value"
        />
        <Pressable style={styles.buttonDone}>
          <Text>Done</Text>
        </Pressable>
        {/* <Text>
          Emri i plantit: 
          {load()}
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 15,
    gap: 40,
  },

  imagePlaceholder: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    border: 1,
    borderBlockColor: "black",
    backgroundColor: "#ddd",
    alignItems: "center",
    textAlign: "center",
  },

  addImageTxt: {
    flex: 1,
    fontSize: 20,
    paddingTop: 120,
  },

  inputLabel: {
    width: "75%",
    flexDirection: "row",
    gap: 5,
  },

  txtInput: {
    display: "flex",
    width: 170,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  Watering: {
    width: "70%",
    height: "70%",
  },

  buttonDone: {
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B359",
    borderRadius: 35,
  },

  DropDownPickeri: {
    width: "70%",
    height: 50,
  },
});

export default AddTo;
