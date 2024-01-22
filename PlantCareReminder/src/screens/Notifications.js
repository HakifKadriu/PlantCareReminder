import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native';
import NotificationCard from './components/NotificationsCard';
export default function Notifications() {
    return (

        <>
            <Pressable style={styles.AllNotifications}>
                <Text>All Notifications</Text>
            </Pressable>
        <View style={{gap: 10}}>
        <NotificationCard style={{marginTop:50 }}></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    AllNotifications: {
        paddingVertical: 10,
        marginHorizontal: 50,
        marginTop: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00B359',
        borderColor: 'black',
        borderRadius: 20,
        marginBottom: 25,
    },
  });