import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Animated,
    StatusBar
  } from 'react-native'

  // import TimerMixin from 'react-timer-mixin';
  // var Component = createReactClass({
  //   mixins: [TimerMixin],
  //   componentDidMount: function() {
  //     this.setTimeout(() => {
  //       console.log('I do not leak!');
  //     }, 500);
  //   },
  // });

 export default class Splashscreen extends React.Component{
    constructor () {
        super()
        this.springValue = new Animated.Value(0.3)
      }
      componentDidMount(){

           
             this.springValue.setValue(0.3)
             Animated.spring(
               this.springValue,
               {
                 toValue: 1,
                 friction: 1
                 
               }
             ).start()
       
   }
   
      
      render(){
          return(
            <View style={styles.container}>
            <StatusBar 
              backgroundColor = '#D96C36'
              barStyle = 'light-content'
            />
                 <Animated.Image
                style={{ width: 327, height: 300, transform: [{scale: this.springValue}] }}
                source={require('../images/logo.png')}/>
              
          </View>

          )
      }
  }
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#D96C36'
    }
  })
  