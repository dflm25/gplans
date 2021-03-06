/**
 * Styles Home
 */

// Dependencies
import { StyleSheet, Dimensions } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Felipe Lucumi Marin
 * @description Styles definition for component.
 */

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#283593',
    width: width / 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  }
});

export default styles;
