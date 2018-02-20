import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar
} from 'react-native'
import * as Images from '../../assets/imgs/images';
import Styles from '../styles/sheets';
import * as Colors from '../styles/colors';

export default class Result extends Component {

  getResult() {
    let result = Math.floor(Math.random()*2);
    switch(result) {
      case 0:
        return Images.heads
        break;
      case 1:
        return Images.tails;
        break;
    }
  }

  render() {

    return(
      <View style={Styles.result}>
        <StatusBar
          backgroundColor={Colors.fundo}
        />
        <Image
          style={Styles.resultImage}
          source={this.getResult()}
        />
      </View>
    );
  }
}