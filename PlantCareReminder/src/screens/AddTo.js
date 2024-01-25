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
  Dimensions,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import {launchImageLibrary} from 'react-native-image-picker';

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
  const [temperature, setTemperature] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  
  const data = [
    { key: "1", value: "Every 1 hour" },
    { key: "2", value: "Every 2 hours" },
    { key: "3", value: "Every 6 hours" },
    { key: "4", value: "Every 12 hours" },
    { key: "5", value: "Every 24 hours" },
  ];
  return (
    <View style={styles.MainContainer}>
    <Pressable style={[styles.imagePlaceholder, selectedImage ? { backgroundColor: 'transparent' } : null]} onPress={openImagePicker}>
      {selectedImage ? (
      <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      ) : (
      <Text style={styles.addImageTxt}>Add An Image!</Text>
      )}
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
          value={temperature}
          onChangeText={(temperature) => setTemperature(temperature)}
        />
      </View>
      <View style={styles.Watering}>
        <Text>Water Every: </Text>
        <SelectList
          style={styles.DropDownPickeri}
          setSelected={(selectedTime) => setSelectedTime(selectedTime)}
          data={data}
          save="value"
        />
        <Pressable style={styles.buttonDone}>
          <Text>Done</Text>
        </Pressable>
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
    backgroundColor: '#ddd',    alignItems: "center",
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
