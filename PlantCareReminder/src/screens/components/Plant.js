import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Plant() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        //Nje kartel ndahet ne tri views: viewi per foto,detaje dhe per butona
        <View style={styles.maincontainer}>
            <View>
                <Image
                    style={styles.plantImage}
                    source={require('../../images/aglonema.jpg')}
                />
            </View>

            <View>
                <Text style={{fontSize: 22}}>Aglonema</Text>
                <Text style={{fontSize: 14, paddingLeft: 2, marginTop: 10}}><MaterialCommunityIcons name="watering-can" color={'black'} size={20} /> 0d 23h 15m</Text>
                <Text style={{fontSize: 14}}><MaterialCommunityIcons name="flower" color={'black'} size={20} /> 0d 23h 15m</Text>
                <Text style={{fontSize: 14}}><MaterialCommunityIcons name="thermometer" color={'black'} size={20} /> 13 - 21 °C</Text>
            </View>

            <View style = {{flex: 1,justifyContent: "space-between",flexDirection: "column"}}>
                <Pressable
                    style = {{alignItems: 'flex-end'}}
                >
                    <Text><MaterialCommunityIcons name="information-outline" color={'black'} size={20} /></Text>
                </Pressable>

                <Pressable
                    style = {{width: 75, alignItems: "center", alignSelf: "flex-end"}}
                >
                    <Text style={{backgroundColor: "#00B359", padding: 3.5, borderRadius: 5,}}>Water <MaterialCommunityIcons name="watering-can" color={'black'} size={20} /></Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        
        width: '100%',
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
    }
});