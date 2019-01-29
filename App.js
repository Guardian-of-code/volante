/**
 author : Simhadri G
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Container,Content,Button,Header} from 'native-base';
import AppContainer from './scr/landingScreen';
import firebase from 'firebase';
//import firebaseConfig from './src/config/firebaseConf';
var config = {
    databaseURL: "https://volante-106b5.firebaseio.com",
    projectId: "volante-106b5",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>

    );
  }
}
