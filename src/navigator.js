import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
//import { NavigationExperimental } from 'react-native-deprecated-custom-components';
import App from './ui/app';
export default class navigator extends Component {
   constructor(props) {
     super(props);
   }
   render() {
    let defaultName = 'App';
    let defaultComponent = App;
    return (
      <NavigatorIOS
        initialRoute = {{title : defaultName , component: defaultComponent}}
        configureScene = {(route) => {
          return NavigatorIOS.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route,navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
        }}
        />
    );
  }

};