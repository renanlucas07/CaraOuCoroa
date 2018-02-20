import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Styles from './styles/sheets';
import Home from './components/Home';
import More from './components/More';
import About from './components/About';
import Result from './components/Result';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene 
          key='home'
          component={Home}
          hideNavBar
          initial
        />
        <Scene 
          key='about'
          component={About}
          hideNavBar={false}
          navigationBarStyle={Styles.navBar}
        />
        <Scene 
          key='more'
          component={More}
          hideNavBar={false}
          navigationBarStyle={Styles.navBar}
        />
        <Scene 
          key='result'
          component={Result}
          hideNavBar={false}
          navigationBarStyle={Styles.navBar}
        />
      </Router>
    );
  }
}
