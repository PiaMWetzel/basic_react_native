import React, {useReducer} from 'react'
import {View, Text, Button} from 'react-native'


const reducer = (state, action) => {
    //state === {count: number}
    //action === increase || decrease

    switch(action.type){
        case 'increment':
            return {...state, count: state.count + 1};
        case 'decrement':
            return {...state, count: state.count - 1}
        default: 
            return state;
    }


};

const ImprovedCounter = () => {
const [state, dispatch] = useReducer(reducer, {count: 0})

return(
<View>
    <Button title = "Increase" onPress = {() => dispatch({type: 'increment'})}/>
    <Button title = "Decrease" onPress = {() => dispatch({type: 'decrement'})}/>
    <View>
        <Text>Current Count</Text>
        <Text>{state.count}</Text>
    </View>
</View>

)};

export default ImprovedCounter;