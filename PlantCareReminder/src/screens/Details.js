import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import DetailsCard from "../components/DetailsCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default function Details({ route }) {
  const navigation = useNavigation();
  const plantName = route.params?.plantName;

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            color={"black"}
            size={30}
          ></MaterialCommunityIcons>
        </Pressable>
        <Text style={{ opacity: 0.5 }}>Details about: {plantName}</Text>
        <View style={styles.CardContainer}>
          {/* Detail Card go here */}
          <DetailsCard name={plantName}></DetailsCard>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 30,
    marginTop: 7,
    flex: 1,
  },
});
