import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Encyclopedia = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [plantInfo, setPlantInfo] = useState("");

  const handleSearch = async () => {
    try {
      const apiKey = "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";
      const apiEndpoint = "https://api.openai.com/v1/chat/completions";

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: search },
          ],
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      const choices = data.choices || [];
      const firstChoice = choices[0] || {};
      const messageContent = firstChoice.message?.content || "No information available.";

      setPlantInfo(messageContent);
    } catch (error) {
      console.error("Error fetching plant information", error);
      setPlantInfo("Error fetching plant information");
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Plant Name"
          placeholderTextColor="#a6a6a6"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Button title="Search Plant" onPress={handleSearch} />

        <View style={styles.tipContainer}>
          <Text style={{ fontSize: 22 }}>Quick Tip!</Text>
          <Text style={{ fontSize: 18, marginTop: 10 }}>
            All plants have their respective scientific names. Type it in the
            search bar above to find various information and tips about your
            plants!
          </Text>
        </View>

        <Text style={{ fontSize: 26, marginTop: 40 }}>Popular Indoor Plants</Text>

        <View style={styles.plantInfoContainer}>
          <Text>{plantInfo}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
  plantInfoContainer: {
    marginTop: 20,
  },
});

export default Encyclopedia;
