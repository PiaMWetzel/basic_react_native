import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    //helper function
    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        //change === +15, -15
        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? setRed(red) : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? setBlue(blue) : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? setGreen(green) : setGreen(green + change);
                return;

        }
        if(color === 'red'){
            
        }


    };

    return(
    <View>
    <Text> Square Screen</Text>
    <ColorCounter color = "Red" onIncrease = {() => setColor('red', COLOR_INCREMENT)} onDecrease = {() => setColor('red', - COLOR_INCREMENT)}/>
    <ColorCounter color = "Green" onIncrease = {() => setColor('green', COLOR_INCREMENT)} onDecrease = {() => setColor('green', - COLOR_INCREMENT)}/>
    <ColorCounter color = "Blue" onIncrease = {() => setColor('blue' , COLOR_INCREMENT)} onDecrease = {() => setColor('blue', - COLOR_INCREMENT)}/>
    <View style = {{height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
)};

const styles = StyleSheet.create({

});

export default SquareScreen;
