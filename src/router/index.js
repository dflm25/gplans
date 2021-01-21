/**
 * Router
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Boarding from 'gplans/src/pages/boarding';
import HomePage from 'gplans/src/pages/home';

// Components
import MyTabBar from '../components/tabBar';

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
  // {...props}
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          tabBar={props => <MyTabBar />}
          initialRouteName={ !boarding ? 'boarding': 'home' }
          screenOptions={{
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="boarding"
            component={Boarding}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={HomePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;