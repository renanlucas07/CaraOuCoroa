import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Images from '../../assets/imgs/images';
import Styles from '../styles/sheets';
import * as Colors from '../styles/colors';

export default class Home extends Component {

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor={Colors.fundo}
        />
        <View style={Styles.body}>
          <Image
            source={Images.logo}
          />
          <TouchableHighlight
            underlayColor={Colors.fundo}
            activeOpacity={0.3}
            onPress={ () => { Actions.result(); } }
          >
            <Image
              source={Images.play_btn}
            />
          </TouchableHighlight>
        </View>
        <View style={Styles.footer}>
          <TouchableHighlight
            underlayColor={Colors.fundo}
            activeOpacity={0.3}
            onPress={ () => { Actions.about(); } }
          >
            <Image
              source={Images.about}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={Colors.fundo}
            activeOpacity={0.3}
            onPress={ () => { Actions.more(); } }
          >
            <Image
              source={Images.more}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}