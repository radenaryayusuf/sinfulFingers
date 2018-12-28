import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    Spring,
    StatusBar,
    componentWillMount
  } from 'react-native'
  import Splashscreen from './Splashcreen' 
  import Screen from './Screen'
  // import TimerMixin from 'react-timer-mixin';
  // var Component = createReactClass({
  //   mixins: [TimerMixin],
  //   componentDidMount: function() {
  //     this.setTimeout(() => {
  //       console.log('I do not leak!');
  //     }, 500);
  //   },
  // });

 export default class welcomePage extends React.Component{
    constructor () {
        super()
        this.state = {
          component : <Splashscreen />
         }
        this.springValue = new Animated.Value(0.3)
      }
      componentDidMount(){

        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
             // Add your logic for the transition
             this.setState({ component: <Screen /> })
        }, 5000);
   }
   componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
}
      
      render(){
          return(
            this.state.component

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
  