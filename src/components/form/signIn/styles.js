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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#283593',
    width: width / 2.1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
  label: {
    marginTop: 15,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  inputText: {
    width: width - 30,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  labelPassword: {
    marginTop: 15,
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default styles;
