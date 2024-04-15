import React, { Component } from 'react';  
import { Alert, Button, StyleSheet, View } from 'react-native';  
  
function AlertZone() {  
const twoOptionAlert = () =>{
    Alert.alert(
        'Hello, This is Title',
        'I am two option alert',
        [
            {
                text: 'Yes',
                onPress: () =>{
                    console.log('Yes Pressed');
                }
            },
            {
                text: 'No',
                onPress: () =>{
                    console.log('No Pressed');
                }
            }
        ]
    )
}
    
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={twoOptionAlert}  
                        title="Two Option Alert"  
                        color="#009933"  
                    />  
                </View>  
            </View>  
        );  
    
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  
export default AlertZone