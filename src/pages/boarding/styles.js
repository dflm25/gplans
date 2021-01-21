/**
 * Styles Home
 */

// Dependencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Felipe Lucumi Marin
 * @description Styles definition for component.
 */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepImage: {
    width: "90%",
    height: "50%",
    marginVertical: 30
  },
  stepIndicatorView: {
    flexDirection: "row"
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 10
  },
  navigationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  navigationBtn: {
    backgroundColor: "#283593",
    height: 40,
    width: 80,
    justifyContent:"center",
    alignItems:"center"
  },
  navigationBtnTxt: {
    color: "white",
    fontWeight: "bold"
  }
});

export default styles;
