import React from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
import {Entypo} from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const arrowImg = require('../assets/arrow.png');
const Header = ({handleClearTodos}) => {
  return ( 
   <View> 
    <View style={styles.header}>

    <Image source={arrowImg}
        style={styles.bookStyle}
        />  
      <Text style={styles.headerTitle}>Today's Goals </Text>
   
      <Pressable style={styles.headerButton}> 
      <Entypo  name='trash' color="firebrick" size={25} onPress={handleClearTodos}/>
      </Pressable>
    </View>
    </View>
  );
};



const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#ff0204",
    letterSpacing: 2,
    fontStyle: 'italic',
    
  },
  headerButton:{
    fontWeight: 'bold',
    color: "#E6E6EG",

  },
text: {
    color:'#fff',
    fontSize: 23,
    textAlign: 'center',
},
bookStyle: {
  height: 50,
  width: 50,
  // flex: 1,
  // justifyContent: 'center',
  // alignItems: 'center',
  // alignSelf: 'center',
  // alignContent: 'center'
   },
});

export default Header