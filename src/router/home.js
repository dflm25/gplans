/**
 * Home screen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Boarding from '../pages/boarding';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="bording" component={Boarding} />
    </Stack.Navigator>
  );
}

export default HomeStack;