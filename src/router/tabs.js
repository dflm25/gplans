/**
 * Tabs navigation
 */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import HomePage from '../pages/home';
import SearchPage from '../pages/search';
import CreatePost from '../pages/createPost';
// import Notification from '../pages/notification';
import Account from '../pages/account';

// Headers
import { HeaderHome } from './header';

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="home" component={HomePage}
        options={{
          headerShown: true,
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color="#333" size={22} />,
          headerTitle: props => <HeaderHome {...props} />
        }}
      />
      <Tab.Screen 
        name="search" 
        component={SearchPage} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="search" color="#333" size={22} />,
        }}
      />
      <Tab.Screen 
        name="createPost" 
        component={CreatePost} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="create" color="#333" size={22} />,
        }}
      />
      <Tab.Screen 
        name="account"
        component={Account} 
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <Icon name="account-box" color="#333" size={26} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default NavTab;

/*
<Tab.Screen 
  name="notification"
  component={Notification} 
  options={{
    tabBarLabel: '',
    tabBarIcon: () => <Icon name="notifications" color="#333" size={24} />,
  }}
/>
*/