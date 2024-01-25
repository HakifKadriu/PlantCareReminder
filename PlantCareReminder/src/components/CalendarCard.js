import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";

export default function NotificationCard() {
  return (
    <>
    <View style={styles.Kartelat}>
      <View style={styles.KartelaFotove}>
        <Image
          style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 15,}}
          source={require("../images/aglonema.jpg")}
        />
      </View>
      <View style={{justifyContent: "space-between"}}>
        <Text style={styles.TekstiKryesor}>Plant Name</Text>
        <View>
          <Text style={styles.TekstiSekondar}>Irrigation Cycle: <Text style={{fontWeight: "500"}}>Every 2 Days</Text></Text>
          <Text style={styles.Teksti3te}>Last irrigation date: <Text style={{fontWeight: "500"}}>January 18th</Text></Text>
        </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  Kartelat: {
    flexDirection: 'row',
    backgroundColor: '#00B359',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,

    marginTop: 10,
  },
  KartelaFotove: {
  },
  TekstiKryesor: {
    fontSize: 15,
    fontWeight: '700'
  },
  TekstiSekondar: {
    fontWeight: '300',
    fontSize: 14,
    marginTop: 10,
  },
  Teksti3te: {
    fontWeight: '300',
    fontSize: 14,

    marginBottom: 10,
  },
});
