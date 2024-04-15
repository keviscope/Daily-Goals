import React from 'react';
import {View, StyleSheet, Image, Button, Text} from "react-native";
import { Linking } from 'react-native';

const bookImage = require('../assets/pornCover.jpg');
const Escape = () =>{
    const facebookPage = require('../assets/fblogo.png');

    return (
        <View style={{flex:1}}>
        <Text style={styles.buttonStyle} 
         onPress={() => Linking.openURL('https://selar.co/cnx781')}>
            Escape Porn(This book will change your life)
            <br/>
            <Text style={styles.getLink}> Get Book Now </Text>
            <br/>
            <Image source={bookImage}
        style={styles.bookStyle}
        onPress={() => Linking.openURL('https://selar.co/cnx781')}
        /> 
          </Text>
        
<br/>
<View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                  /><br/>
<Text style={styles.buttonStyle} 
         onPress={() => Linking.openURL('https://web.facebook.com/profile.php?id=61555120613234')}>
            <Text style={styles.getLink}>  Follow Our Page</Text>
            <br/>
            <Image source={facebookPage}
        style={styles.fbStyle}
        onPress={() => Linking.openURL('https://web.facebook.com/profile.php?id=61555120613234')}
        /> 
          </Text>




{/* <Text  style={styles.buttonStyle}
      onPress={() => Linking.openURL('https://web.facebook.com/profile.php?id=61555120613234')}>
        Follow Our Page
<Image source={facebookPage}
        style={styles.fbStyle}
        onPress={() => Linking.openURL('https://web.facebook.com/profile.php?id=61555120613234')}
        />
      
        </Text> */}
        </View>
      

    )
}
const styles = StyleSheet.create({
    bookStyle: {
     height: 200,
     width: 200
      },
  
   fbStyle: {
    height: 50,
    width: 50
     },

     buttonStyle:{
        color: 'blue',

       
        flex:1, 
     
        textAlign: 'center',
     },
     
     getLink:{
        backgroundColor: 'blue',
        flex:1, 
        padding: 3,
        fontWeight: 'bold',
        color: 'white',
        
     }
    
  });
export default Escape