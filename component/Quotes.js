import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function Quotes(){
    
    const arr =  [
        {id: "Milk Samba", text: "Milk is so good for the body hjgkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhkkkkkbh"},
        {id: "Egg obioma", text: "Egg is good, i mean he boiled onejjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"},
        {id: "Bread David", text: "Bread is the oldet food on earthllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"},
        {id: "Jessica Gidion", text: "Too much Juice too much saucemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},
      ];

   
        let mike = arr[(Math.floor(Math.random() * arr.length))];
    

  return (
    <View style={styles.container}>
      <Text style={styles.quoteStyle}>"{mike.text}" 
            <Text style={styles.authorSyle}>--{mike.id}</Text>
      </Text>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
    textAlign: 'center',
    color: '#2ecc71',

    
  },
  quoteStyle:{
    color: 'purple',
  },

  authorSyle:{
    color: '#purple',
   //paddingLeft: 125,
  }
});
