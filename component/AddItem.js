import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const AddItem = ({title, addItem}) => {
const [text, setText] = useState('');
const onChange = textValue => setText(textValue);
  return (
  <View>
    <TextInput placeholder='Add Item...' 
    style={styles.input} onChangeText={onChange}/>
    <Pressable style={styles.btn} onPress={()=>
    addItem(text)}>
      <Text style={styles.btnText}>Add Item</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  input:{
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  }


});

export default AddItem