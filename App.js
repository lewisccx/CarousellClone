import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedbackBase,
  TouchableHighlight,
  TouchableOpacity, 
  TouchableNativeFeedback,
  Button} from 'react-native';

export default function App() {

  console.log(require('./assets/icon.png'))

  return (
    <SafeAreaView style={styles.container}>
     <Button 
     color="orange"
     title = "Click me" onPress = { ()=> alert("button tapped")}/>
    
      <StatusBar hidden ={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    //set item in center of parent
    justifyContent: "center",
    alignItems: "center"
    //end 


  },
});
