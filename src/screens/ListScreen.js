import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'


const ListScreen = () => {
    const friends = [
        {name: "Friend #1"},
        {name: "Friend #2"},
        {name: "Friend #3"},
        {name: "Friend #4"},
        {name: "Friend #5"}, 
        {name: "Friend #6"},
        {name: "Friend #7"}
    ];
    return (
    <FlatList
    keyExtractor = {friend => friend.name} 
    data={friends}
    renderItem = {({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
    }}
            />);
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50,
        fontSize: 30,
        color: 'red'
    }, 



});

export default ListScreen;