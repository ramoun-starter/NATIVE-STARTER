import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeView} from '@screens';
import {theme} from '@styles';

const Stack = createNativeStackNavigator();

const AppStack = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: theme.primaryColor.default},
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'Home',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
);

export {AppStack};
