import * as React from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons'
import { useEffect, useState,  } from 'react';
import { EventRegister } from 'react-native-event-listeners';
// import Ionicons from 'react-native-vector-Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { View,  ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { YellowBox } from 'react-native-web';
const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();
const App = () => {
  const image = require('./assets/app_background.png');
  const [ready, setReady] = useState(false);
  const initialTodos = [];
    const [todos, setTodos] = useState(initialTodos);
useEffect(() => {
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
  async function prepare(){
    try{
      await new Promise(resolve => setTimeout(resolve, 2000));
         AsyncStorage.getItem("storedTodos").then(data => {
        if(data !== null){
          setTodos(JSON.parse(data))
        }  })
    } catch(e){
      console.warn(e);
    }finally{
      setReady(true)
    }
  }
  prepare();

}, [])
const onLayoutRootView = React.useCallback(async () => {
  if(ready){
    await SplashScreen.hideAsync();
  }
}, [ready])
if(!ready){
  return null;
}


      
    
  return(

     <ScrollView>
    <View  style={styles.container} onLayout={onLayoutRootView}>
 

      <Home todos={todos} setTodos={setTodos}/>
    <StatusBar style='light'/>

  
    </View>
    
    </ScrollView>
  

  )
}
const styles = StyleSheet.create({
  container: {
   color: 'green',
   fontWeight: 'bold',
   fontSize: 18,
   textAlign: "center",
   alignItems: 'center',
   justifyContent: 'center'
    },
    image: {
      width: 1284,
      height: 2778
    }
  
});
export default App