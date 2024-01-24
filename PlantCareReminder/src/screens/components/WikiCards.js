import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function WikiCard({navigation}) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={styles.maincontainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../images/aglonema.jpg")}
                    // resizeMode='contain'
                    style={{
                        width: "80%",
                        height: "80%",
                        borderRadius: 10,
                    }}
                />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={{fontSize: 28, borderBottomWidth: 5, borderBottomColor: "#33ff33", marginRight: 15}}>Aglonema</Text>
                <Text style={{fontSize: 16, marginTop: 10,}}>Region: <br></br><span style={{fontSize: 18, fontWeight: "500"}}>Asia and New Guinea</span></Text>
                <Pressable
                    style={styles.butoni}
                    // onPress={() => navigation.navigate('Details')}
                >
                    <Text style={{fontSize: 18, textDecorationLine: "underline"}}>More Information...</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#D9D9D9",

        height: 200,
        borderRadius: 10,

        flexDirection: "row",
    },
    imageContainer: {
        width: "50%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        width: "50%",
        height: "100%",

        paddingVertical: 10,

    },
    butoni: {
        // backgroundColor: "#33ff33",
        width: 175,
        height: 30,

        marginTop: "auto",
        marginRight: "auto",
        alignSelf: "center",
        alignItems: "center"
        // paddingVertical: 5,
        // paddingHorizontal: 15,
    }
});