 //part 1 -> import libraries we need to create a component
 import React from 'react';
 import {Text, StyleSheet, View} from 'react-native';

 //part 2 -> create component that returns JSX
 const ComponentScreen = () => {
     const greeting = "Hi there";
     return <View style = {styles.viewStyle}>
         <Text style = {styles.textStyle}> {greeting} this is the components screen</Text>
         </View>;
 };

 //part 3 -> create stylesheet
 const styles = StyleSheet.create({
     textStyle:{
         fontSize: 30,
         color: 'red'
     }, 

     viewStyle:{
         backgroundColor: 'green'
     }

 });

 //part 4 -> export component
 export default ComponentScreen;

