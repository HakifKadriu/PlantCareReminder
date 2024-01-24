import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Splashscreen() {
    return (
<View style={styles.container}>
    <Text style={styles.Plantify}>Plantify</Text>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'forestgreen',
        flexDirection:'column',
    },

    Plantify: {
        flexDirection:'row',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 320,

    },
});
