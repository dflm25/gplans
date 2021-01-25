/**
 * Tab bar
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons';

// Page
import Boarding from 'gplans/src/pages/boarding';
import HomePage from 'gplans/src/pages/home';

const Tab = createBottomTabNavigator();

function TabBar() {

  return(
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="boarding"
        component={Boarding}
        options={{
          tabBarLabel: 'boarding',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="all_inbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;