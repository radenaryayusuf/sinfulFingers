import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  ImageBackground,
  StatusBar
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import Swiper from "./Swiper";

export default class Screen extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
    
        {/* First screen */}
        <View style={{flex:1}}>
        <StatusBar 
      backgroundColor="#FF7F00" 
      barStyle = 'light-content'
      />
        <ImageBackground source={require('../images/welcome_1.jpg')} style={styles.backgroundImage}>
       
               </ImageBackground>
       
       
        </View>
        {/* Second screen */}
        <View style={{flex:1}}>
        <StatusBar 
      backgroundColor="#FF7F00" 
      barStyle = 'light-content'
      />
        <ImageBackground source={require('../images/welcome_2.jpg')} style={styles.backgroundImage}>
       
               </ImageBackground>
       
       
        </View>
        {/* Third screen */}
        <View style={{flex:1, backgroundColor:"#FF7F00" }}>
        <StatusBar 
      backgroundColor="#FF7F00" 
      barStyle = 'light-content'
      />
        <ImageBackground source={require('../images/welcome_3.png')} style={styles.backgroundImage}>
       
               </ImageBackground>
       
       
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#16a085"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    resizeMode: 'cover'// or 'stretch'

},
Contentwel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
},
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
});
AppRegistry.registerComponent("Screen", () => Screen);