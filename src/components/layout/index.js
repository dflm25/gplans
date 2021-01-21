/**
 * Layout component
 */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import HomePage from '../../pages/home';

// Styles
import styles from './styles';

const Tab = createBottomTabNavigator();

function Layout({ children }) {
  return (
    <View style={styles.container}>
      {children}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="boarding" component={HomePage} />
      </Tab.Navigator>
    </View>
  );
}

export default Layout;