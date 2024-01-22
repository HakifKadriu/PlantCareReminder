import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

export default function NotificationCard() {
  return (
    <>
    <View style={styles.Kartelat}>
      <View style={styles.KartelaFotove}>
        <Image
          style={{ width: 70, height: 70, resizeMode: 'cover' }}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
      <View>
        <Text style={styles.TekstiKryesor}>Time to water Aglonema!</Text>
        <Text style={styles.TekstiSekondar}>Time until next irrigation: 1d 21h 45m</Text>
        <Text style={styles.Teksti3te}>2h 14m Ago</Text>
        <Text></Text>
      </View>
    </View>
    {/* <View></View> */}
    </>
  );
}

const styles = StyleSheet.create({
  Kartelat: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    borderRadius: 20,
    backgroundColor: '#ddd',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  KartelaFotove: {

  },
  TekstiKryesor: {
    fontSize: 15,
    fontWeight: '700'
  },
  Teksti3te: {
    fontWeight: '300',
    fontSize: 12,
    marginTop: 15,
  },
});
