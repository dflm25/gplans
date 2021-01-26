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
  content: { 
    justifyContent:'center', 
    alignItems:'center',
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#474747',
    borderBottomWidth: 1,
    width: '100%',
    padding: 5,
  },
  profilePic: { 
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  picture: {
    width: width - 20,
    height: 180,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  footerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5, 
  },
  share: {
    alignItems: 'flex-end',
  },
  comment: {
    alignItems: 'center',
  }
});

export default styles;
