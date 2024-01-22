import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalendarCard from './components/CalendarCard';

export default function Calendar() {
    return (
<View style={styles.container}>
    <Text style={styles.txtCalendari}>Today!</Text>
    <Text style={styles.txtCalendari}>January 24th</Text>
    <View style={styles.ContainerSecond}>
        <Text style={styles.txtCalendari}>Need to be irrigated today</Text>
        <CalendarCard></CalendarCard>
        <CalendarCard></CalendarCard>
        <CalendarCard></CalendarCard>
        <CalendarCard></CalendarCard>
        <CalendarCard></CalendarCard>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    },

    ContainerSecond: {
        alignItems: 'center', 
        marginHorizontal: 25,
        marginTop: 15,
        width: 385,
        height: 650,
        backgroundColor: 'lightgray',
        gap: 5,
    },

    txtCalendari: {
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 10,
    },
});

