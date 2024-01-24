import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import CalendarCard from './components/CalendarCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Calendar() {
    return (
<View style={styles.container}>
    <Text style={styles.txtCalendari}>Today <br></br>January 24th</Text>
    
        <View style={styles.ContainerSecond}>
            <ScrollView>
                <Text style={{opacity: "70%", marginBottom: 15, marginTop: 5, fontSize: 18}}>Need to be irrigated today</Text>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
                <CalendarCard></CalendarCard>
            </ScrollView>
        </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal: 20,
    },

    ContainerSecond: {
        height: windowHeight * 0.7,
        backgroundColor: 'lightgray',


        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,

    },

    txtCalendari: {
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 20,
    },
});

