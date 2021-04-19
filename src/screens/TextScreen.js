
import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, TextInput} from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState("");
    return <View>
        <Text> Please enter name: </Text>
        <TextInput style= {styles.input} value = {name} onChangeText = {(newVal) => setName(newVal) }/>
        <Text>My name is {name}</Text>
        {name.length < 5 ? <Text>Your password needs to be greater than five characters</Text> : null}
        </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15, 
        borderColor: 'red',
        borderWidth: 1
    }
});
export default TextScreen