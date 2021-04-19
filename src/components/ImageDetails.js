
import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

const ImageDetails = (props) => {
    return <View>
        <Image source={props.imageSource}/>
        <Text>Show image of {props.title}</Text>
        <Text>Show image of {props.imageScore}</Text>
        </View>
};

const styles = StyleSheet.create({

});
export default ImageDetails