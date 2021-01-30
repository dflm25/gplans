/**
 * Router
 */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import OnBoarding from '../pages/boarding';
import HomePage from '../pages/home';
import SearchPage from '../pages/search';
import CreatePost from '../pages/createPost';
import Account from '../pages/account';

// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

// Storage
import * as storage from '../utils/storage';

const Tab = createBottomTabNavigator();

const getBoaring = async (setBoarding, setIsLoading) => {
  const response = await storage.getStorage('boarding');
  setBoarding(response);
  setIsLoading(false);
}

function App () {
  const [loading, setIsLoading] = useState(true);
  const [boarding, setBoarding] = useState(false);

  useEffect(() => {
    if (!boarding) {
      getBoaring(setBoarding, setIsLoading);
    }
  }, [])

  if (loading)
    return <View />;
  
  if (!boarding)
    return (<OnBoarding />)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={ !boarding ? 'boarding': 'home' }
            tabBarOptions={{
              headerTitleAlign: 'center',
              /*gestureEnabled: false,
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'green',
                elevation: 0,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
              },
              showIcon: true,*/
            }}
          >
          <Tab.Screen 
            name="home" component={HomePage}
            options={{
              headerShown: true,
              tabBarIcon: () => <Icon name="home" color="#333" size={22} />,
              tabBarVisible: true,
              tabBarLabel: () => null
            }}
          />
          <Tab.Screen 
            name="search" 
            component={SearchPage} 
            options={{
              tabBarLabel: () => null,
              tabBarIcon: () => <Icon name="search" color="#333" size={22} />,
              tabBarVisible: true,
            }}
          />
          <Tab.Screen 
            name="createPost" 
            component={CreatePost} 
            options={{
              tabBarLabel: () => null,
              tabBarIcon: () => <Icon name="create" color="#333" size={22} />,
            }}
          />
          <Tab.Screen 
            name="account"
            component={Account} 
            options={{
              headerShown: true,
              tabBarLabel: () => null,
              tabBarIcon: () => <Icon name="account-box" color="#333" size={26} />,
              tabBarVisible: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;