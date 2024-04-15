import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import {Entypo} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-web';



const ListItem = ({todos, setTodos, handleTriggerEdit}) => {
  
  const [swipedRow, setSwipedRow] = useState(null);
  const handleDeleteTodo = (rowMap, rowKey) =>{
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
  

    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos)).then(() =>{
      setTodos(newTodos);
    }).catch(error => console.log(error));
  }
  const redColor = {
    backgroundColor: 'blue',
  }
    const greenColor = {
    backgroundColor: 'green',
  }

  // if(todos.length != 0){
  //   Alert.alert("You can click on a goal to edit it");

  // }
  return (
      <> 
    {todos.length == 0 && <Text style={styles.noGoals}>Hey, you have no goals today. Click the plus sign to set a goal</Text>}
    
       
        {todos.length != 0 &&<SwipeListView 
        data={todos}
        renderItem={(data) => {
        // alert(1);
          return (
       
          
           
      <Text onPress={() => {
        handleTriggerEdit(data.item) }}    
       style={styles.ListView}>
        
        <Text style={styles.TodoText}>{data.item.title}{`\n`}</Text>

        <Text style={styles.TodoDate}>{data.item.date}</Text>
        
      </Text>
          )
        }}
        renderHiddenItem={(data, rowMap)=>{
         return( 
         <View style={styles.ListViewHidden}> 
     
            <Pressable style={styles.HiddenButton}> 
            <Entypo  name='trash' size={25} onPress ={ ()=> handleDeleteTodo(rowMap, data.item.key)}/>
            </Pressable>
      
          </View>)
        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1, paddingBottom: 30, marginBottom: 40
        }}
        onRowOpen={(rowKey) => {
          setSwipedRow(rowKey);
        }}
        onRowClose={() =>{
          setSwipedRow(null);
        }}
        />}
        
      
      
        </>

   

    
  );
}

const styles = StyleSheet.create({
  imageStyle:{
    height: 200,
    width: 200
  },
  TodoText: {
    fontSize: 16,
    letterSpacing: 1,
   color: "#ffffff",

  },
  TodoDate: {
    fontSize: 10,
    letterSpacing: 1,
    color:"#999999",
    textAlign: 'right',
    textTransform: 'uppercase'
  },
  ListView:{
    backgroundColor: "#3d5afe",
minHeight: 50,
width: -50,
padding: 15,
justifyContent: 'space-around',

marginBottom: 10,
borderRadius: 10,

  },
  ListItemText: {
// fontSize: 18,
  },

  ListViewHidden: {
    backgroundColor: "#E6E6EG",
    minHeight: 85,
    width: 100,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 15,
    borderRadius: 100 / 2,
  },
  HiddenButton: {
    width: 55,
alignItems: 'center',
color: "#4D3636",
  },
  
  noGoals: {
bottom: -50,
justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        textAlign: "center"
  }
});

export default ListItem