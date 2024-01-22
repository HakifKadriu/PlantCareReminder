// ImageTab.js
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Pressable, DropDownPicker } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

const AddTo = () => {
   const [text1, setText1] = React.useState("");
   const [text2, setText2] = React.useState("");
   const [selected, setSelected] = React.useState("");
   const data = [
    {key:'1', value:'Every 1 hour', },
    {key:'2', value:'Every 2 hours'},
    {key:'3', value:'Every 6 hours'},
    {key:'4', value:'Every 12 hours',},
    {key:'5', value:'Every 24 hours'},
]
  return (
    <View style={styles.MainContainer}>
            <View style={styles.imagePlaceholder}>
            <Text style={styles.addImageTxt}>Add An Image!</Text>
            </View>
            <View style={styles.txtInputName}>
              <Text>Plant Name: </Text>
              <TextInput style={styles.txtInput}
              label="Email"
              value={text1}
              onChangeText={text1 => setText1(text1)}/>
            </View>
            <View style={styles.txtInputTemp}>
              <Text>Temperature: </Text>
              <TextInput style={styles.txtInput}
              label="Email"
              value={text2}
              onChangeText={text2 => setText2(text2)}
              />
            </View>
            <View style={styles.Watering}>
              <Text>Water Every: </Text>
              <SelectList style={styles.DropdownPickeri}
              setSelected={(val) => setSelected(val)} 
              data={data} 
              save="value"
              />
            <Pressable style={styles.buttonDone}>
              <Text>Done</Text>
            </Pressable>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  MainContainer:{
    flex: 1, 
    alignItems: 'center', 
    marginHorizontal: 25,
    marginTop: 15,
    gap: 40,
  },

  txtInputTemp:{
    width: '70%',
    flexDirection: 'row',
  },

  imagePlaceholder:{
    width: 300,
    height: 300,
    border: 1,
    borderBlockColor: 'black',
    backgroundColor: 'gray',
    paddingTop: 20,
  },

  addImageTxt: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 120,
  },

  txtInputName:{
    width: '70%',
    flexDirection: 'row',
  },
  txtInput:{
    display: 'flex',
    width: 170,
    borderBottomWidth: 1,
    borderColor: 'black',
  },

  Watering: {
    width: '70%',
    height: '70%',
  },

  buttonDone:{
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B359',
    borderRadius: 35,
  },

  DropDownPickeri:{
    width: '70%',
    height: 50,
  },
  // wateringTime: {
  //   flex: 1,
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   borderRadius: 5,
  // },
});

export default AddTo;