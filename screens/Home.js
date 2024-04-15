
import {View, StyleSheet, Text, Pressable} from "react-native";
import React, { useState } from 'react';

import Header from "../component/Header";
import ListItem from "../component/ListItem";
import InputModal from "../component/InputModal";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({todos, setTodos}) =>{


      //clear all todos
      const handleClearTodos = () =>{

        AsyncStorage.setItem("storedTodos", JSON.stringify([])).then(() =>{
          setTodos([]);
        }).catch(error => console.log(error));
      }

      //Modal visibility
      const [modalVisible, setModalVisible] = useState(false);
      const [todoInputValue, setTodoInputValue] = useState();
      
      //function to add a new todo
      const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
       

        AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos)).then(() =>{
          setTodos(newTodos);
          setModalVisible(false);
        }).catch(error => console.log(error));
      };


      //Editing
      const [todoToBeEdited, setTodoToBeEdited] = useState(null);
      const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
      }

      const handleEditTodo = (editedTodo) =>{
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo);
    

        AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos)).then(() =>{
          setTodos(newTodos);
          setModalVisible(false);
          setTodoToBeEdited(null);
        }).catch(error => console.log(error));
      }
      return (
      

        <View style={styles.container} >

            <Header handleClearTodos={handleClearTodos}/>
            <View  style={{flex:1,  justifyContent: 'center', alignItems: 'center'}}> 
         
            <ListItem  style={{fontSize: 16, color: 'red', fontWeight: 'bold'}}

            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit}
            />
       
           </View>
        
            <View>
         
        </View>
           <InputModal
         style={styles.inputM}
           modalVisible={modalVisible}
           setModalVisible={setModalVisible}
           todoInputValue={todoInputValue}
           setTodoInputValue={setTodoInputValue}
           handleAddTodo={handleAddTodo}
           todoToBeEdited={todoToBeEdited}
           setTodoToBeEdited={setTodoToBeEdited}
           handleEditTodo={handleEditTodo}
           todos={todos}
           />



           </View>
         

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


});
export default Home