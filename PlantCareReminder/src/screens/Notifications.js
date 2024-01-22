import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Notifications() {
    return (
<View style={styles.AllNotifications}>
    <Button tittle= "All Notifications" color="green"/>
 
</View>
    )
}

const styles = StyleSheet.create({
    AllNotifications: {
        flexDirection: 'row'
    },
  });