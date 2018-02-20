import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import * as Images from '../../assets/imgs/images';
import Styles from '../styles/sheets';
import * as Colors from '../styles/colors';

export default class About extends Component {

  render() {

    return(
      <View style={Styles.about}>
        <StatusBar
          backgroundColor={Colors.fundo}
        />
        <Text style={Styles.aboutText}>
          Aqui podem ser apresentadas informações sobre o jogo.
        </Text>
      </View>
    );
  }
}