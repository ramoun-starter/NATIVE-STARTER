import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SafeArea, StatusBar} from '@components';
import {ThemeProvider} from '@styles';

import {AppStack} from './stacks/app';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const AppInner = () => (
  <SafeArea>
    <StatusBar showHideTransition="slide" animated />

    <AppStack />
  </SafeArea>
);

export {App};
