import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

export default function NotificationCard() {
  return (
    <>
    <View style={styles.Kartelat}>
      <View style={styles.KartelaFotove}>
        <Image
          style={{ width: 80, height: 80, resizeMode: 'cover' }}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
      <View>
        <Text style={styles.TekstiKryesor}>Plant Name</Text>
        <Text style={styles.TekstiSekondar}>Irrigation Cycle: Every 2 Days</Text>
        <Text style={styles.Teksti3te}>Last irrigation date: January 18th</Text>
        <Text></Text>
      </View>
    </View>
    {/* <View></View> */}
    </>
  );
}

const styles = StyleSheet.create({
  Kartelat: {
    flexDirection: 'row',
    width: 370,
    height: 100,
    backgroundColor: '#ddd',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  KartelaFotove: {
  },
  TekstiKryesor: {
    fontSize: 15,
    fontWeight: '700'
  },
  TekstiSekondar: {
    fontWeight: '300',
    fontSize: 12,
    marginTop: 10,
  },
  Teksti3te: {
    fontWeight: '300',
    fontSize: 12,
    marginTop: 10,
  },
});
