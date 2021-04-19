import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, FlatList} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ColorScreen = () => {
    const [color, setColor] = useState([])
    console.log(color);
    return(
        <View>
        <Button  title = "Add a color" onPress = {() => {
            setColor([...color, randomRgb()]); 
        }}/>
        <Text>Color Screen</Text>
        <FlatList 
        data = {color} 
        keyExtractor = {(item) => item}
        renderItem={({item}) => {
            return (<View style = {{height:100, width:100, backgroundColor: item }}/>)
        }}/>
        </View>

    )};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
};
const style = StyleSheet.create({

});

export default ColorScreen;