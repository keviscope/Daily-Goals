import React, { useState } from 'react';
import { Modal, TextInput } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from "../component/Header";
import Quotes from './Quotes';
const InputModal = ({
    modalVisible, 
    setModalVisible,
     todoInputValue, 
     setTodoInputValue,
     handleAddTodo,
     todoToBeEdited,
     setTodoToBeEdited,
     handleEditTodo,
     todos,
    }) => {
    const handleCloseModal = () => {
       setModalVisible(false);
       //setTodoInputValue("");
        setTodoToBeEdited(null);
    }

    const handleSubmit = () => {
   
        if(!todoInputValue || todoInputValue.trim() == "" || todoInputValue.length <= 0){
            alert("The field is empty")
             return false
        }
        if(!todoToBeEdited){
            handleAddTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key: `${(todos[todos.length-1] && parseInt(todos[todos.length -1].key) + 1) || 1}`
               });
        }else{
            handleEditTodo({
                title: todoInputValue,
                date: todoToBeEdited.date,
                key: todoToBeEdited.key
            })
        }
    
       setTodoInputValue("");
    }
    return(
        <>
       
        <Pressable style={styles.ModalButton} >
            <AntDesign name='plus' size={50} onPress={() => {setModalVisible(true)}}/>
        </Pressable>
   
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        >
            <View style={styles.ModalContainer}>  
       
                <View style={styles.ModalView}> 
            <View style={styles.ModalIcon}>
                <AntDesign name='edit' size={30} />
            </View>
            <TextInput
            placeholder='Add a goal'
            placeholderTextColor='#004063'
            selectionColor='green'
            autoFocus={true}
            onChangeText={(text) => setTodoInputValue(text)}
            value={todoInputValue}
            onSubmitEditing={handleSubmit}
            style={styles.styledInput}
            />


            <View style={styles.ModalActionGroup}>


            <View style={styles.ModalAction}>
                <AntDesign name='close' size={28} onPress={handleCloseModal}/>
            </View>
            <View style={styles.ModalAction1}>
                <AntDesign name='check' size={28} onPress={handleSubmit}/>
            </View>
            </View>
            </View>
         
            </View>
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    ModalButton:{
        // width: 60,
        // height: 60,
        // backgroundColor:"#E6E6EG",
        // borderRadius: 100/2,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        // position: 'absolute',
        bottom: 50,
        // padding: 20,
    },

  ModalIcon: {
    alignItems: 'center',
marginBottom: 30,
  },

  ModalContainer:{
padding: 20,
justifyContent: 'center',
alignItems: 'center',
flex: 1,
backgroundColor:  "#004063",
  },
  
  styledInput:{
    width: 300,
height: 50,
backgroundColor: "#075f5f",
padding: 10,
fontSize: 16,
borderRadius: 10,
color: "white",
letterSpacing: 1,
  },
  ModalActionGroup:{
    flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 30,
  },
  ModalAction:{
    width: 60,
height: 60,
backgroundColor: '#623600',
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center',
  },

  ModalAction1:{
    width: 60,
height: 60,
backgroundColor: "#004063",
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center',
  },
  ModalView:{
    backgroundColor: "#d77700",
borderRadius: 20,
padding: 35,
  }

    
  });
export default InputModal