import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import * as Images from '../../assets/imgs/images';
import Styles from '../styles/sheets';
import * as Colors from '../styles/colors';

export default class More extends Component {

  render() {

    return(
      <View  style={Styles.more}>
        <StatusBar
          backgroundColor={Colors.fundo}
        />
        <Text style={Styles.moreText}>
          Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor.
        </Text>
      </View>
    );
  }
}