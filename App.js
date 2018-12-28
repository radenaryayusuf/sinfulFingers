import React, { Component } from 'react';
import { createAppContainer, createStackNavigator} from 'react-navigation';
import welcomePage from './components/welcomePage';
import NavigationService from './navigationService';
import HomePages from './components/HomePage';
import Screen from "./components/Screen";
import Swiper from "./components/Swiper";
import leaderBoard from "./components/leaderBoard";
const RootStack = createStackNavigator(
  {
    Screen: {
      screen: Screen,
      navigationOptions: {
        title: "Screen"
      }
    },
    Swiper: {
      screen: Swiper,
      navigationOptions: {
        title: "Swiper"
      }
    },
    leaderBoard: {
      screen: leaderBoard,
      navigationOptions: {
        title: "LeaderBoard"
      }
    },
   
    welcomePage: welcomePage,
    HomePage: HomePages
  },
  {
    initialRouteName: 'welcomePage',
    headerMode: "none"
  }
  
);
const AppContainer = createAppContainer(RootStack);
  export default class App extends React.Component {
  
  
    render() {
      return(
        <AppContainer
          ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);}}
        />
      )
    }
}
