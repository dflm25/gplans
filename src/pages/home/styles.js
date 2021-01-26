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
  list: { 
    width: width - 20, 
    height: 800,
  }
});

export default styles;
