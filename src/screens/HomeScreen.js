import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props);
  return(
  <View>
  <Text style={styles.text}>Hi there </Text>
  <Button onPress={()=> navigation.navigate("Components")} title="Go to components demo"/>
  <TouchableOpacity onPress = {() => navigation.navigate("List")}>
    <Text>Go to list demo</Text>
  </TouchableOpacity>

  <Button onPress = {() => navigation.navigate("List")} title = "Go to list screen"/>

  <Button onPress = {() => navigation.navigate("Image")} title = "Go to image screen"/>
  <Button onPress = {() => navigation.navigate("Counter")} title = "Go to Counter screen"/>
  <Button onPress = {() => navigation.navigate("Color")} title = "Go to Color screen"/>
  <Button onPress = {() => navigation.navigate("Square")} title = "Go to Square screen"/>
  <Button onPress = {() => navigation.navigate("BetterSquare")} title = "Go to Better Square screen"/>
  <Button onPress = {() => navigation.navigate("BetterCounter")} title = "Go to Better Counter screen"/>
  <Button onPress = {() => navigation.navigate("TextScreen")} title = "Go to TextScreen"/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
