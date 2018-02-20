import { StyleSheet } from 'react-native';
import * as Colors from './colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fundo
  },
  body: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  about: {
    flex: 1,
    backgroundColor: Colors.fundo
  },
  aboutText: {
    flex: 1,
    backgroundColor: Colors.fundo,
    fontSize: 16,
    paddingTop: 50
  },
  more: {
    flex: 1,
    backgroundColor: Colors.fundo
  },
  moreText: {
    flex: 1,
    backgroundColor: Colors.fundo,
    fontSize: 16,
    paddingTop: 50
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fundo,
  },
  resultImage: {
    height: 300,
    width: 300
  },
  navBar: {
    backgroundColor: Colors.fundo,
    borderBottomWidth: 0
  }
});

export default style;