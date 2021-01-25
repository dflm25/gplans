/**
 * Tabs navigation
 */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import HomePage from '../pages/home';
import SearchPage from '../pages/search';
import CreatePost from '../pages/createPost';
import Notification from '../pages/notification';
import Account from '../pages/account';

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="search" component={SearchPage} />
      <Tab.Screen name="createPost" component={CreatePost} />
      <Tab.Screen name="notification" component={Notification} />
      <Tab.Screen name="account" component={Account} />
    </Tab.Navigator>
  )
}

export default NavTab;