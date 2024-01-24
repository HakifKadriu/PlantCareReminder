import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function Splashscreen() {
    return (
<View style={styles.container}>
    <Image
    style={styles.PlantifyLogo}
    source={require('../images/plant.png')}
    />
    <Text style={styles.Plantify}>Plantify</Text>
    <ActivityIndicator size="large" color="#00ff00" />
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'forestgreen',
        flexDirection:'column',
        justifyContent: 'center',
    },

    Plantify: {
        flexDirection:'row',
        fontSize: 50,
        textAlign: 'center',

    },

    PlantifyLogo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
});
