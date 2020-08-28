import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import GiveClasses from './pages/GiveClasses';

const Stack = createStackNavigator();

const Routes = () => {
	return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Landing'
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='GiveClasses' component={GiveClasses} />
      </Stack.Navigator>
    </NavigationContainer>
	);
}

export default Routes;
