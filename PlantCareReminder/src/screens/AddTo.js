// ImageTab.js
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const AddTo = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View style={styles.imagePlaceholder}>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePlaceholder:{
    position: 'absolute',
    top: 20,
    width: 372,
    height: 300,
    border: 1,
    borderBlockColor: 'black',
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
});

export default AddTo;