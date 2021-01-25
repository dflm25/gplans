/**
 * Router
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Pages
import HomeTabs from './tabs';
import OnBoarding from '../pages/boarding';

// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

// helpers
import * as storage from '../utils/storage';

const Stack = createStackNavigator();

const getBoaring = async (setBoarding, setIsLoading) => {
  const response = await storage.getStorage('boarding');
  setBoarding(response);
  setIsLoading(false);
}

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'The Home s App';

  switch (routeName) {
    case 'Favorites':
      return 'Favorites';
    case 'Info':
      return 'Info about the App';
  }
  return routeName;
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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={ !boarding ? 'boarding': 'home' }
            tabBarOptions={{
              activeTintColor: '#e91e63',
              gestureEnabled: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'green',
                elevation: 0,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
              },
            }}
          >
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="boarding" component={OnBoarding} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;